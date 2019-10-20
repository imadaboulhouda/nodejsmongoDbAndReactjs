const express = require('express');
const router = express.Router();
const Schema = require("../config/Item");
router.get('/',(req,res)=>{
    Schema.find().sort({date:-1}).then(items=>res.json(items));
   
});
//@access public
router.post("/",(req,res)=>{
   
    const newItem = new Schema({
        name:req.body.name
    });
    newItem.save().then(item=>res.json(item));
});

router.delete("/:id",(req,res)=>{
    Schema.findById(req.params.id).then((item)=>
    item.remove().then(()=>{
        res.json({success:true}); 
    })
    );
})

router.patch("/:id",(req,res)=>{
    Schema.findById(req.params.id).then((item)=>
    {
        console.log(item);
        item.name = req.body.name;
        item.save().then(items=> res.json(items));
    }
   
    );
}) 

module.exports = router; 