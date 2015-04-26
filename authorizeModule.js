var jwt=require('jwt-simple')
function authorize(req,res){
		if(!req.headers.authorization){
            console.log('authorization header not found in run');
            return res.status(401).send({message:'Your not authorized'});
        }
        var token=req.headers.authorization;
        var payload=jwt.decode(token,'shh...');
        if(!payload.sub){
            return res.status(401).send({message:'you are not authorized to view'});
        }
        return payload;
}
module.exports=authorize;