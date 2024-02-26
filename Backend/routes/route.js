const express = require('express')
const mongoose = require('mongoose')
const memeModel = require('../data/schema')
const router = express.Router()
require("dotenv").config()


//read
router.get('/data',async (req,res)=>{
    const data = await memeModel.find({})
    res.json({msg : true , data : data})
})

// create data 
router.post("/create",async (req,res)=>{
    console.log(req.body)
    const data = new memeModel(req.body)
    await data.save()
    res.send({message : "data saved successfully"})
})


// update data 
router.put("/update/:_id", async (req, res) => {
    let _id = req.params._id;
    let meme_id = req.body.memeId;
    let title = req.body.memeTitle;
    let tags = req.body.tags;
    const data = await memeModel.findOneAndUpdate({_id: _id}, { memeId: meme_id, memeTitle: title, tags: tags});
    console.log(data);
    res.send({msg : true , message : "Data updated successfully"});
});


//delete data
router.delete("/delete/:_id",async (req,res)=>{
    const id  = req.params._id
    console.log(id)
    const data = await memeModel.deleteOne({_id : id})
    console.log(data);
    res.send({msg : true , message : "data deleted successfully"})

})

module.exports = router;