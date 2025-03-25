const { Router } = require('express');  
const { getMessages, queryMessage } = require('../controllers/messages')

const indexRouter = Router();

indexRouter.get("/", (req,res) => {
    res.render("index", {title: 'hey', messages: getMessages()});
})


// indexRouter.get("display/:index", (req,res) => {
//     res.render("display", {text: req.params.message, user: req.params.user, added: req.params.date});
// })

indexRouter.get("/display/:index", (req,res) => {
    res.render("display", {message: queryMessage(req.params.index)});
})


module.exports = indexRouter;