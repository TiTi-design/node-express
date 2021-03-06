const express = require('express');
const app = express();
const { people } = require('./data')

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).send({ success: true, data: people })
})

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.get('/about', (req, res) => {
    console.log(req.query)
    res.send('hello world')
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})
