var express = require('express');
var router = express.Router();
const viewPath = './views/';

//여기서 URL 관리, 그래서 이름이 라우터임
router.get('/', (req, res) => {
    res.sendFile(viewPath + 'index.html', { root: __dirname });
});
router.get('/about', (req, res) => {
    res.sendFile(viewPath + 'about.html', { root: __dirname });
});
router.get('/credits', (req, res) => {
    res.sendFile(viewPath + 'credits.html', { root: __dirname });
});
router.get('/food', (req, res) => {
    res.sendFile(viewPath + 'food.html', { root: __dirname });
});
router.get('/lineup', (req, res) => {
    res.sendFile(viewPath + 'lineup.html', { root: __dirname });
});

module.exports = router;
