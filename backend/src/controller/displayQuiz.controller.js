
const express=require("express")
const User = require("../model/auth.model.js")
const router =express.Router()

const Postquiz = require("../model/quizdata.model.js")

router.get("/", async (req, res) => {
    try {
        const Postquizdata = await Postquiz.find().lean().exec()
        res.send(Postquizdata)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        // Case-insensitive search with regex for flexibility
        const Postquizdata = await Postquiz.find({ 
          title: { $regex: new RegExp(`^${req.params.id}$`, 'i') } 
        }).lean().exec();
        
        // Final fallback: if exact match fails, try partial
        const finalData = Postquizdata.length > 0 
          ? Postquizdata 
          : await Postquiz.find({ title: { $regex: new RegExp(req.params.id, 'i') } }).lean().exec();

        res.send(finalData);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

module.exports = router