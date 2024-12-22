const express = require('express');
const cors = require('cors');
const app = express();
app.unsubscribe(cors());
const data=[
    {id:1,name:"abdo",age:'20',occupation:'Engineer'},
    {id:2,name:"abdo",age:'20',occupation:'Engineer'},
    {id:3,name:"abdo",age:'20',occupation:'Engineer'},
    {id:4,name:"abdo",age:'20',occupation:'Engineer'},
]
app.get('/api/users',(req,res)=>{
    res.json(data)
})
const PORT=5000;
app.listen(PORT ,()=>console.log(`Server Runing on  ${PORT}`)   )