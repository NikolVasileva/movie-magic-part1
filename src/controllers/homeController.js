import { Router } from "express";

const homeController = Router();

// 2. Routes
homeController.get("/", (req, res) => {
    // res.send("It works!");
    res.render("home")
});

homeController.get("/about", (req, res) => {
    res.render("about")
})

export default homeController