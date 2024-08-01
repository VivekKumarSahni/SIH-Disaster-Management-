import styles from "./Resource.module.css";
 

export default function Resource(){



    return (
        <>
        <div className={styles.tableresponsive}>
        <table className={styles.userTable}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Charge Name</th>
                    <th>Charge Type</th>
                    <th>Charge Rate</th>
                    <th>Entry Date</th>
                    <th>Charge Amount</th>
                    <th>Charge Apply On Base Amount</th>
                    <th>Rounding Type</th>
                    <th>Hoa Posting Required</th>
                    <th>Is Deposit To Govt</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* <FindAllData allData={allData} setAllData={setAllData} handleFindALL={handleFindALL} /> */}
            </tbody>

        </table>

    </div>
        </>
    )
}