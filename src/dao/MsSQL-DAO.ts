import sql from 'mssql'

class MsSQLDAO{
    async getDB(){
        return await sql.connect('Server=assignment-ce.database.windows.net,1433;Database=assignment-sql;User Id=yijiang;Password=Qwerty123!@#;Encrypt=true')
    }

    async getUsername(id:number, dataCallback:Function){
        this.getDB().then(()=>{
            sql.query`SELECT Name FROM Persons WHERE ID = ${id}`.then((it)=>{
                dataCallback(it)
            })
        })
    }
}

export default MsSQLDAO