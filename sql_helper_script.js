const sql_insert_helper = (emails) => {
    let queryStart = `SELECT * FROM DB2PROD.NOEMAIL_LIST
WHERE EMAIL_ADDRESS IN (`

    let queryMiddle = ``;
    count= 0

    for (email of emails) {
        let insertQuery = `INSERT INTO DB2PROD.NOEMAIL_LIST
VALUES ('${email}', '2020-11-19', 'RMC');
`   
        queryStart += `\n'${email}',`
        queryMiddle += insertQuery
        count += 1
    }

    // Replace last comma with a parenthesis
    queryStart = queryStart.replace(/,([^,]*)$/,")")

    console.log(queryStart + "\n" + queryMiddle)
    console.log(`count = ${count}\n`)
}

// array of emails to put into the query
const emails = []

// here you can set how large you want each query to be
let chunkSize = 30;

for (var i = 0; i < emails.length; i += chunkSize){
    let chunk = emails.slice(i, i + chunkSize)

    sql_insert_helper(chunk)
}



