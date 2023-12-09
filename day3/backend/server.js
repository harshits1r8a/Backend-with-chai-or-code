import 'dotenv/config'
import express from 'express'

const app = express()

app.use(express.static('dist'))

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"First joke",
            content : "Why are Communists bad Java programmers?"
        },
        {
            id:2,
            title:"Second content",
            content : "If i create a Java class public Class Woman{}"
        },
        {
            id:3,
            title:"Third content",
            content : "Why do blind programmers use Java?"
        },
        {
            id:4,
            title:"Forth content",
            content : "Why do blind programmers use Java?"
        },
        {
            id:5,
            title:"Fifth content",
            content : "I made a java program to tell me my purpose."
        }
    ]

    res.send(jokes)
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server at http://localhost : ${PORT}`);
})