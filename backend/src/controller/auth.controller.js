const express = require('express')
const router = express.Router()
const User = require("../model/auth.model.js")

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (user) {
            if (password === user.password) {
                console.log("login successfull")
                res.send({ message: "Login Succesfully", user: user })
            } else {
                res.send({ message: "Invalid Password" })
            }
        } else {
            res.send({ message: "User Not Regitered " })
        }
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error", error: err.message })
    }
})

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await User.findOne({ email: email })
        if (user) {
            res.send({ message: 'User Already Registered' })
        } else {
            const newUser = new User({
                name,
                email,
                password,
            })
            await newUser.save()
            res.send({ message: 'Successfully Registered' })
        }
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error", error: err.message })
    }
})

//  ------------ get data of user by admin controller-----------
router.get('/getuser', async (req, res) => {
    try {
        const data = await User.find({}).lean().exec()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

//  ------------delete user by admin controller-----------
router.delete('/:id', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.send("user deleted")
    } catch (err) {
        res.status(500).send("An error Occured")
    }
})

module.exports = router