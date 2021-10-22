const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>About this page</h1>
        <p>This is a sentence about this page.</p>
        <p><a href="/about/me">Learn about me</a></p>
        `);
});

router.get('/me', (req, res) => {
    res.send(`
    <h1>About me</h1>
    <p>This is a page about me.</p>
    <p><a href="/about">About</a></p>
    `);
});

module.exports = router;