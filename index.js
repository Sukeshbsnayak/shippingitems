 
const express = require('express');
const app = express()
app.use(express.json())//specifieng incomming daya im jason formate,
//other wise nor see o/p and get null 
const items = [];//empty array created
const PORT = 2000;
 
app.post('/items', (req, res) => {
  try {
    const item = req.body;
    items.push(item);
    res.send(items);
  } catch (error) { }
})// creating,, data in postman man send to here ,data send in postman and call it here using variable student
//update items record

//data of items will be fetch
app.get('/items', (req, res) => {
  try {
    res.send(items)
  } catch (error) {
    res.send(error)
  }
})
//for  delete
app.delete("/items/:id",(req,res)=>{
  try{
    const index=items.findIndex(( item)=>
     item.id==req.params.id)
    items.splice(index,1)//index and 1 data will delete ,splice :implise delete
    res.send("deleted")
  }catch(error){

    res.send(error)
  }
})
app.put('/items/:id', (req, res) => {
  try {
    const id = req.params.id;
    const index = items.findIndex(( item) =>
       item.id == id)
    items[index] = req.body
    res.send(items);
  } catch (error) {
    res.send(error)
  }
})
//READ  item RECORDE USING ID
app.get('/items/:id',(req,res)=>{
  try{
    const  item=items.find((item)=>
    item.id==req.params.id)
    res.send(item);
  }catch(error){
    res.send(error)
  }
})
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
