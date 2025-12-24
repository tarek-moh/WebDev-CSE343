const express = require("express");
const mongoose = require("mongoose");
const coursesRouter = require("./routes/coursesRouter");

const uri = "mongodb+srv://udemy:udemy123@udemyclone.zipyu8m.mongodb.net/?appName=udemyClone";

const databaseConnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database connected");
    }
    catch (error) {
        console.log(`couldn't connect to DB ${error}`);
    }
}

databaseConnect();

const app = express();

app.use(express.json());

app.use('/courses', coursesRouter);


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
