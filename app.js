var express=require('express');
var app=express();
var PORT=process.env.PORT||process.argv[2]||3000;

//middleware object
var middleware={
	requireAuthentication:function(req, res, next){
		console.log('Private route hit!');
		next();		
	},
	logger:function(req, res, next){
		console.log('::Request: '+req.method+' '+req.originalUrl+' '+new Date().toString());
		next();
	}
};

//middleware
//other middleware
app.use(middleware.logger);
//middleware to expose static files
app.use(express.static(__dirname+'/public'));

//routes
app.get('/about', function(req, res){
	res.send('About us');
});

app.listen(PORT, function(){
	console.log('Server started on localhost:'+PORT+'. Please press ctrl+c to kill it.');
});
