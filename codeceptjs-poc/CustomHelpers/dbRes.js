const I = actor();
const sql = require('mssql');

module.exports = {
    async ConnectDB(){
        var sqlConfig = {
            database: "databasename",
            server: "serverName",
            driver: "msnodesqlv8",
            options: {
                trustedConnection: true
            }
        };
        try {
            console.log("sql connecting......")
            let pool = await sql.connect(sqlConfig)
            let result = await pool.request()
                .query('write database query')  // subject is my database table name


        } catch (err) {
            console.log(err);
        }
        return membernumber;
    }

}