const { Router } = require('express');
const comments = require("../../mock-comments")
const router = Router();

router.get('/all', (req, res) => {
    res.json(comments)
})
router.get('/first_four', (req, res) => {
    res.json(comments.slice(0,4))
})
router.get('/rest', (req, res) => {
    res.json(comments.slice(4,comments.length))
})
router.post('/post', (req, res) => {
    const body = req.body;
    comments.push({
        comment: body.comment,
        name: body.name
    })
    res.json(comments[comments.length-1])
})



module.exports = router;
