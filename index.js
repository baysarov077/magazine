const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4050

app.use(express.json())
app.listen(port, () => console.log('Запуск сервера...'))
app.get('/', (req, res) => res.json('Hello dude'))

mongoose.connect('mongodb+srv://baysarov077:Avenger95@cluster0.9anwb.mongodb.net/magazine?retryWrites=true&w=majority')
.then(() => console.log('Сервер запущен успешно')).catch(() => console.log('Не удалось запустить сервер'))


