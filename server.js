var express=require('express');
var app=express().use(express.static('public'));
app.listen(3000);