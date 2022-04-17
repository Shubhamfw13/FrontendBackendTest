require('dotenv').config()
const express = require("express");
const cors = require("cors")
const connect = require("./src/config/db");
const {body} = require("express-validator");
const {register, login} = require("./src/controllers/auth.controller");
const userController = require("./src/controllers/user.controller");
const flatController = require("./src/controllers/flat.controller")
const residentController = require("./src/controllers/resident.controller")
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            
    optionSuccessStatus: 200
}
app.use(cors());

const port = process.env.PORT || 3000
app.use(express.json());
app.use("/user", userController);
app.use("/resident",  cors(corsOptions), residentController)

app.post("/register",
body("name").isString().isLength({min : 5}),
body("email").isEmail(),
body("password").isLength({min : 6}),
cors(corsOptions)
, register)

app.post("/login", cors(corsOptions), login)
app.use("/flat", cors(corsOptions), flatController)
const start = async()=>{
    await connect();
    app.listen(port, ()=>{
        console.log(`Listening on Port ${port}`);
    })
}
start();