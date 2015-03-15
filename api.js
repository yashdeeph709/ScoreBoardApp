var express = require('express');
var cassandra = require('cassandra-driver');
var bodyParser = require('body-parser');
var router=express.Router();

var db = new cassandra.Client({
    'contactPoints': ['127.0.0.1'],
    keyspace: 'contactsapp'
});

router.use( function (req,res,next){
	if(!req.user){
		req.user={id:1,firstname:"dummy",lastname:"dummy"};
	}
	next();
});

router.use(bodyParser.json());

var contactRoute=router.route('/contact');

contactRoute.get(function(req,res){
	console.log(req.user.id);
	db.execute('select * from contacts where userid='+req.user.id,function (err,result){
		if(!err){
		res.json(result.rows);
		}else{
		res.json(err);
		}
	});	
});
contactRoute.post(function(req,res){
	db.execute("insert into contacts(id,userid,firstname,lastname) values("
		+req.user.id+",1,'"+req.user.firstname+"','"+req.user.lastname+"')",
	function(err,result){
		if(!err){
		res.json({'msg':'done'});
		}else{
		res.json(err);
		}
	});
});

var idRoute=router.route('/contact/:id');
idRoute.get(function(req,res){
	db.execute("select * from users where id='"+parseInt(req.params.id,10)+"';",function(err,result){
		res.json(result);
	});
});
idRoute.put(function(req,res){
	db.execute("update users set firstname='"+req.user.firstname+"',lastname='"+req.user.lastname+"' where id="+req.params.id,function(err,result){
		if(!err){
			res.json(result);
		}else{
			res.json(err);
		}
	});
});
idRoute.delete(function(req,res){
	db.execute("delete from contacts where id='"+req.params.id+";",function(err,result){
		res.json(null);
	});
});
module.exports=router;