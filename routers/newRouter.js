const { Router } = require('express');
const { updateMessages } = require('../controllers/messages');

const newRouter = Router();

newRouter.get("/", (req,res) => {
    res.render("form", {title: "form"});
})

newRouter.post("/", (req,res) => {
    let item = {text: req.body.messageContent, user: req.body.authorName, added: new Date()};
    updateMessages(item);
    res.redirect("/");
})

module.exports = newRouter;