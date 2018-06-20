const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send({ msg: 'hello' });
});

// eslint-disable-next-line no-unused-vars
router.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Oops something went wrong' });
});

module.exports = router;
