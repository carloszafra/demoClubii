const express = require('express');  //aqui utilizaremos express para generar rutas //Router me perimte tener un objeto que facilita la creacion de rutas
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('landing');
})

router.get('/newsfeed', (req,res)=>{
    res.render('newsfeed');
})

module.exports = router;