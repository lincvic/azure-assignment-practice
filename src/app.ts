import express from 'express'
import logger from './util/logger'
import config from './config/CONFIG'
import MsSQLDAO from './dao/MsSQL-DAO'


const app = express()
const sql = new MsSQLDAO()


app.get("/", (req, res) => {
    sql.getUsername(1, (result: any) => {
        const name = result.recordset[0].Name
        const image = {
            screenshot1: "https://azureassignmentstorage.blob.core.windows.net/screenshot/screenshot-1.png?sp=r&st=2022-05-19T16:22:58Z&se=2022-06-30T00:22:58Z&sv=2020-08-04&sr=b&sig=JbjEBScnT72sq86eYrLSEBTZEn4psIqvRNfn%2BQHqBB4%3D",
            screenshot2: "https://azureassignmentstorage.blob.core.windows.net/screenshot/screenshot-2.png?sp=r&st=2022-05-19T16:23:56Z&se=2022-06-30T00:23:56Z&sv=2020-08-04&sr=b&sig=PTNeMPl%2F5LUC3jg0AcWnhnwXClnKPFWHxngi6AY4QAA%3D",
            screenshot3: "https://azureassignmentstorage.blob.core.windows.net/screenshot/screenshot-3.png?sp=r&st=2022-05-19T16:24:28Z&se=2022-06-30T00:24:28Z&sv=2020-08-04&sr=b&sig=GIA1147eypOup7qIkLevbIvt%2B9judIhr6V%2BBIBLYsUw%3D"
        }
        res.send(`<p>Hello Azure service, ${name}</p>
<p>Screenshot 1</p><p>This Scale out is based on CPU percentage. When the CPU percentage is more than 70% for 5 min, App Service will scale out to 2 instance.</p><img src=${image.screenshot1} alt="Screenshot 1">
<p>Screenshot 2</p><p>Since I'm using M1 Mac, so I cannot use Microsoft SQL server management. I choose Azure Data Studio instead.</p><p>This firewall rule was set to only allow my local IP address (31.205.95.62 for 19 May) and Azure resources to access.</p><img src=${image.screenshot2} alt="Screenshot 2">
<p>Screenshot 3</p><p>The storage account is created in UK South region, with hot access tier enabled for blob storage.</p><img src=${image.screenshot3} alt="Screenshot 3">`)
    })
})

app.listen(config.PORT, () => {
    logger.info(`Server start at port ${config.PORT}`)
})