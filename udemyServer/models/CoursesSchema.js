const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructor: String,
    price: Number,
    category: String,
    students: { type: Number, default: 0 },
})

module.exports = mongoose.model("Courses", CoursesSchema);
