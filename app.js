const express = require('express');
const app = express();
let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})


app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide name value'})
    }
    people.push({id: 6,name})
    console.log(people)
    res.status(200).json({success:'true',msg:'You are good to go'})
})


app.post('/login' , (req , res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcone ${name}`)
    }
    res.status(401).send('Please provide a true name')
})

app.get('/query',(req,res)=>{
    res.send('hi')
    console.log(req.query)
})



app.listen(5000,()=>{
    console.log('starting');
})