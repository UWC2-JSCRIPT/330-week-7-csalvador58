const { Router } = require('express');
const router = Router();

// router.use((req, res, next) => {
//   console.log(`
//   ${req.method} ${req.url}
//   Headers: ${req.headers.authorization}
//   Body: ${JSON.stringify(req.body)}
//   at ${new Date()}`);
//   next();
// });

router.use('/landing', require('./landing'));
router.use('/weather', require('./weather'));

module.exports = router;
