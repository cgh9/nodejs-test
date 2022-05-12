const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");
require('dotenv').config();

/* GET home page. */
router.get('/', function (req, res, next) {
  const REQ = req.body;
  console.log('get', REQ)
  res.render('index', { title: 'Express', req: REQ })
    .send(REQ);
});
router.post('/', function (req, res, next) {
  const REQ = req.body;
  console.log('post', REQ.data)
  const secretKey = process.env.SECRETKEY;

  const bytes = CryptoJS.AES.decrypt(REQ.data, secretKey);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);

  console.log('originalText = ', originalText)
  res.json({ message: "success" });
});

module.exports = router;
