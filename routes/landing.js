const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  try {
    const timeStamp = new Date().toTimeString();
    res.render('index', {
      time: timeStamp,
      items: ['item one', 'item two', 'item three'],
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
