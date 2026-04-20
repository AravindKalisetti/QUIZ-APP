const express = require('express')
const router = express.Router()
const User = require("../model/auth.model.js")
const bcrypt = require("bcryptjs")


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log("Login Request:", { email });

        if (!email || !password) {
            return res.status(400).send({ message: "Please enter all fields" })
        }

        const user = await User.findOne({ email: email })
        if (user) {
            // Compare hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                console.log("login successfull")
                res.status(200).send({ message: "Login Succesfully", user: user })
            } else {
                res.status(401).send({ message: "Invalid Password" })
            }
        } else {
            res.status(404).send({ message: "User Not Registered" })
        }
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).send({ message: "Internal Server Error", error: err.message })
    }
})

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body
        console.log("Register Request:", req.body);

        // Validation
        if (!name || !email || !password) {
            return res.status(400).send({ message: "Please fill all fields" });
        }

        const user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).send({ message: 'User Already Registered' })
        } else {
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            })
            await newUser.save()
            console.log("User Saved Successfully:", email);
            res.status(201).send({ message: 'Successfully Registered' })
        }
    } catch (err) {
        console.error("Register Error:", err);
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