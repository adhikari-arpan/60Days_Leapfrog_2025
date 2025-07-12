const express = require("express");

const router = express.Router();

//Routes

router.route('/')
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
            firstName: body.first_name,
            lastname: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });

        console.log("Result", result);
        return res.status(201).json({ msg: 'Success' });
    });

router.route('/:id')
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" })
        return res.json(user);
    });

module.exports = router;