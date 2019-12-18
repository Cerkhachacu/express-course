const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3500;

app.use(bodyParser.json());

const list = [
    {
        id: 1,
        title: "Look Around",
        isDone: true
    },
    {
        id: 2,
        title: "Lunch",
        isDone: false
    },
]

app.get('/lists', (req, res) => {
    res.send(list)
});

app.get('/list/:id', (req, res) => {
    const {id} = req.params
    const index = id -1
    res.send(list[index])
})
app.post('/list', (req,res) => {
    const input = req.body    
    list.push(input);
    res.send(list)
})
app.patch('/list/:id', (req,res) => {
    const id = req.params.id - 1
    const input = req.body
    list[id] = {...list[id], ...input}
    res.send(list)
})
app.delete('/list/:id', (req, res) =>{
    const id = req.params.id-1
    list.splice(id, 1)
    res.send(list)
})


app.listen(port, () => console.log('Listening on port ' + port));
