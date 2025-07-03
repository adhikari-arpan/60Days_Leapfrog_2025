const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;

//Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `${Date.now()}: ${req.method}: ${req.path}\n`, (err, data) => {
        next();
    });
    console.log("Hello from middleware 1");
    // req.myUserName = "Arpan Adhikari";
    next();
}); 

// app.use((req, res, next) => {
//     return res.end("Hey");
// });

//Routes
app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});

//Rest API
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    });


app.route('/api/users')
    .get((req, res) => {
        return res.json(users);
    })
    .post((req, res) => {
        const body = req.body;
        users.push({ ...body, id: users.length + 1 });
        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: "success", id: users.length });
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        // Remove the user from the array
        users.splice(index, 1);
        // Save the updated users array to the file
        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users));
        return res.json({ status: "success", id });
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex(user => user.id === id);

        if (index === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        // Update only the fields provided in req.body
        users[index] = { ...users[index], ...req.body };

        // Save the updated users array to the file
        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users));

        return res.json({ status: "success", user: users[index] });
    });

app.listen(port, () => console.log(`Server started at port ${port}`));



