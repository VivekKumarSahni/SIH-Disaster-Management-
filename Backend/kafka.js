require('dotenv').config();
const { Kafka } = require('kafkajs');
const fs = require('fs');
const path = require('path');
const Message = require('./model/Message');

const kafka = new Kafka({
    brokers: [process.env.KAFKA_BROKER],
    ssl: {
        ca: [fs.readFileSync(path.resolve(process.env.KAFKA_SSL_CA), "utf-8")],
    },
    sasl: {
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD,
        mechanism: process.env.KAFKA_MECHANISM,
    }
});

let producer = null;

async function createProducer() {
    if (producer) return producer;

    const _producer = kafka.producer();
    await _producer.connect();
    producer = _producer;
    return producer;
}

async function produceMessage(message) {
    const producer = await createProducer();
    await producer.send({
        messages: [{ key: `message-${Date.now()}`, value: JSON.stringify(message) }],
        topic: process.env.KAFKA_TOPIC,
    });
    return true;
}

async function startMessageConsumer() {
    console.log("Consumer is running..");
    const consumer = kafka.consumer({ groupId: "default" });
    await consumer.connect();
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: true });

    await consumer.run({
        autoCommit: true,
        eachMessage: async ({ message, pause }) => {
            if (!message.value) return;
            console.log('New Message Recv..');
            try {
                const { sender, recipient, text } = JSON.parse(message.value.toString());

                await Message.create({
                    sender,
                    recipient,
                    text,
                });
            } catch (err) {
                console.log("Something is wrong");
                // pause();
                // setTimeout(() => {
                //     consumer.resume([{ topic: process.env.KAFKA_TOPIC }]);
                // }, 60 * 1000);
            }
        },
    });
}

module.exports = {
    createProducer,
    produceMessage,
    startMessageConsumer,
    kafka
};
