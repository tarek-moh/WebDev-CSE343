const express = require("express");
const router = express.Router();

const Courses = require("../models/CoursesSchema");

router.use(express.json());

router.get("/", async (req, res) => {
    const allCourses = await Courses.find();
    console.log(allCourses);
    res.send(allCourses);
});

router.get("/:id", (req, res) => {
    res.send("Course");
});

router.post("/", async (req, res) => {
    const { title, price, description, instructor, category } = req.body;
    console.log(title, price, description, instructor, category);
    const newCourse = await Courses.create({ title, price, description, instructor, category })
    res.send(newCourse);
});

router.put("/:id", (req, res) => {
    res.send(`Updated Coures with ID: ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
    res.send(`Deleted Coures with ID: ${req.params.id}`)
})

module.exports = router;
