const express = require('express');
const router=express.Router();
const { eventList } = require('../controllers/event');

router.post('/event',eventList);

module.exports=router;