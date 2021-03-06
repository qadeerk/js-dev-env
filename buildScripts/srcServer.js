import express from 'express'; // new format
var path = require('path');
var open =require('open');// old
import webpack from "webpack";
import config from "../webpack.config.dev";

/*eslint-disable no-console*/ 

var port = 3000;  //old 
const app = express(); //new
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});


app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+port);
    }
});
