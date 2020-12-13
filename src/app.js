const express = require('express')
const app = express()
const models = require("../models")
const port = 3000


//获取列表所有
app.get('/list', async (req, res, next) => {
    try {
        let todos = await models.todos.findAll();
        res.json({
            todos
        })
    } catch (error) {
        next(error);
    }
})

app.get('/add', async (req, res, next) => {
    try {
        let {
            title,
            deadline,
            status
        } = req.query;
        let todoItem = await models.todos.create({
            title,
            deadline,
            status
        });
        res.json({
            todoItem
        })
    } catch (error) {
        next(error);
    }
})

app.use((req, res) => {
    res.json({
        message: 'api不存在'
    })
})
app.use((err, req, res) => {
    if (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.listen(port, () => console.log('服务启动成功!'))