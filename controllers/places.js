const router = require('express').router()

module.exports = router

router.get('/', (req, res) => {
    res.send('GET /places')
})