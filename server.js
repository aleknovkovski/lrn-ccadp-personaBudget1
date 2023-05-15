const express = require('express')
const app = express()
const PORT = 3000

const envelopesRouter = require('./routes/envelopes')
app.use(express.json())

app.use("/api/v1/envelopes", envelopesRouter);
app.listen(PORT,()=>{
   console.log("Server is listening on port 3000")
})
