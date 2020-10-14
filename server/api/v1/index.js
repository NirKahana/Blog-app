const { Router } = require("express");
const router = Router();


router.use('/comment', require('./comment'));


const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

router.use(unknownEndpoint);

module.exports = router;