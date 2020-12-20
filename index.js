require('./db');
const {rankdata} = require("./models/rankdata");

const express = require('express');

const app = express();

const allrank = async (req,res) => {
	try{
		const allRank = await rankdata.find({});
		let resdata = [];
		allRank.forEach((data)=>{
			var tmp = {"nickname":data.nickname, "stage":data.stage, "time": data.time};
			resdata.push(tmp);
		});

		res.send(JSON.stringify(resdata));
	}catch(error){
		console.log(error);
		res.send("failed");
	}
}

const saveRank = async (req,res) => {
	const{
		query: {nickname, stage, time}
	} = req;
	try{
		const newData = await rankdata.create({
			nickname: nickname,
			stage: stage,
			time: time
		});
	}catch(error){
		console.log(error);
		res.send('error');
	}
	
	res.send("OK");
}

const deleteRank = async (req,res) => {
	try{
		await rankdata.remove({});
		res.send('allRemoved');
	}catch(error){	
		console.log(error);
		res.send('error');
	}
};

app.get('/', (req,res)=>{
	console.log('req : '+req);
	console.log(req);
	console.log('res : '+res);
	console.log(res);
	res.send('Hello World!');
});

app.get('/saveRank', saveRank);
app.get('/allrank', allrank);
app.get('/removeAll', deleteRank);

app.listen(4000,()=>{console.log('server On!')});