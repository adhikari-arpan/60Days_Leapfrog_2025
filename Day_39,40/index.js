const express = require('express');
const fs = require('fs');
const mongoose = require("mongoose");
const app = express();
const port = 8000;

//Connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoTest')
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log("MOnog Error", err));

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
},
{timestamps: true});

const User = mongoose.model('user', userSchema);

//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/users', async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
        <ul>
            ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email} </li>`).join("")}
        </ul>
    `;
    res.send(html);
});

//Rest API
app.route('/api/users/:id')
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ error: "User not found"})
        return res.json(user);
    });


app.route('/api/users')
    .get(async (req, res) => {
        const allDbUsers = await User.find({});
        return res.json(allDbUsers);
    })
    .post(async (req, res) => {
        const body = req.body;

        if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
            return res.status(400).json({ msg: "All fields are required" })
        }

        const result = await User.create({
            firstName : body.first_name,
            lastname: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });

        console.log("Result", result);
        return res.status(201).json({ msg: 'Success'});
    });

app.listen(port, () => console.log(`Server started at port ${port}`));
