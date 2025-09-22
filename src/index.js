import express from "express"
import handlebars from "express-handlebars"

const app = express();

//1. Setup Handlebars
/// 1.1 setup view engine
app.engine("hbs", handlebars.engine({
    extname: "hbs",
}));

/// 1.2. setup view engine that will be used
app.set("view engine", "hbs")

/// 1.3. setup where is location of the folder views
app.set("views", "src/views")

// 4. Setup middlewares
app.use(express.static("src/public"));

// 2. Routes
app.get("/", (req, res) => {
    // res.send("It works!");
    res.render("home", {layout: false})
});

// 3. Start Server
app.listen(3000, () => console.log("Server is listening to http://localhost:3000..."))