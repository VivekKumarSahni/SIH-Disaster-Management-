const { Kafka } = require('kafkajs');
const fs = require('fs');
const path = require('path');
const Message = require("./models/Message");


const kafka = new Kafka({
    brokers: ["kafka-30fef658-viveksahni52-8e19.k.aivencloud.com:18216"],
    ssl: {
        ca: [fs.readFileSync(path.resolve('./ca.pem'), "utf-8")],
    },
    sasl: {
        username: "avnadmin",
        password: "AVNS_2eiLPSOWiz5th1aObnC",
        mechanism: "plain",
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
        topic: "MESSAGES",
    });
    return true;
}

async function startMessageConsumer() {
    console.log("Consumer is running..");
    const consumer = kafka.consumer({ groupId: "default" });
    await consumer.connect();
    await consumer.subscribe({ topic: "MESSAGES", fromBeginning: true });
  
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
        //   pause();
        //   setTimeout(() => {
        //     consumer.resume([{ topic: "MESSAGES" }]);
        //   }, 60 * 1000);
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
