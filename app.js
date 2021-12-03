if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
const express = require('express')
const cors = require('cors');
const router = require('./routers');

const app = express()
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({
        message: 'Application running'
    })
})

app.use(router)

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});

module.exports = app;
