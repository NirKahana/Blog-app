const { Router } = require("express");
const router = Router();


router.use('/comments', require('./comments'));


const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

router.use(unknownEndpoint);

module.exports = router;