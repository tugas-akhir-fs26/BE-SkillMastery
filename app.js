const express = require('express')
const app = express()
const allRoutes = require('./routes')
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors({
    origin : '*'
}));
app.use(express.json())
app.use(allRoutes)

app.listen(PORT, ()=> {
    console.log(`Port Running at Port ${PORT}`);
})

