const sql_insert_helper = (emails) => {
    let queryStart = `SELECT * FROM DB2PROD.NOEMAIL_LIST
WHERE EMAIL_ADDRESS IN (`

    let queryMiddle = ``;
    count= 0

    for (email of emails) {
        queryStart += `\n'${email}',`
        
        let insertQuery = `INSERT INTO DB2PROD.NOEMAIL_LIST
VALUES ('${email}', '2020-11-19', 'RMC');
`
        queryMiddle += insertQuery
        count += 1
    }

    
    queryStart = queryStart.replace(/,([^,]*)$/,")")

    console.log(queryStart + "\n" + queryMiddle)
    console.log(`count = ${count}\n`)
}


const emails = []

// here you can set how large you want each query to be
let chunkSize = 30;

for (var i = 0; i < emails.length; i += chunkSize){
    let chunk = emails.slice(i, i + chunkSize)

    sql_insert_helper(chunk)
}



