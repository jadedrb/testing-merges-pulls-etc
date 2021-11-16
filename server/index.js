const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./db")

// middleware 
app.use(cors())
app.use(express.json())

// routes

// GET
app.get("/users", async (req, res) => {
    try {
        let sql = `SELECT * FROM users;`
        const [users] = await db.execute(sql)
        res.json(users)
    } catch (err) {
        console.log(err.message)
    }
})


app.listen(5000, () => {
    console.log("server started on 5000...")
})


