var crypto=require('crypto');
 exports.encode=function(payload, secret){
 	algorithm="HS256";

 	var header={typ:'jwt',alg:algorithm};
 	var jwt=base64Encode(header)+'.'+base64Encode(payload);
 	jwt+='.'+sign(jwt,secret);

 }

function sign(str,key){
	return cryptoCreateHmac('sha256',key).update(str).digest('base64');
}
 function base64Encode(str){
 	return new Buffer(str).toString('base64');
 }