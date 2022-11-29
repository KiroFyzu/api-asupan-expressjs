__path = process.cwd()

// Module
const express = require('express');
const route = express.Router();
const fetch = require('node-fetch');
const fs = require('fs');

route.get('/asupan/random', async (req, res, next) => {
        fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/scraper/main/asupan/random.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
        res.sendFile(__path+'/tmp/video.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json('Error, not found')
})
})
route.get('/asupan/bocil', async (req, res, next) => {
        fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/scraper/main/asupan/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
        res.sendFile(__path+'/tmp/video.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json('Error, not found')
})
})
route.get('/asupan/gheayubi', async (req, res, next) => {
        fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/scraper/main/asupan/gheayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
        res.sendFile(__path+'/tmp/video.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json('Error, not found')
})
})
route.get('/asupan/hijaber', async (req, res, next) => {
        fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/scraper/main/asupan/hijaber.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
        res.sendFile(__path+'/tmp/video.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json('Error, not found')
})
})
route.get('/asupan/rikagusriani', async (req, res, next) => {
        fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/scraper/main/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
        res.sendFile(__path+'/tmp/video.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json('Error, not found')
})
})
route.get('/asupan/santuy', async (req, res, next) => {
        fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/scraper/main/asupan/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
        res.sendFile(__path+'/tmp/video.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json('Error, not found')
})
})
route.get('/asupan/ukhty', async (req, res, next) => {
        fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/scraper/main/asupan/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
        res.sendFile(__path+'/tmp/video.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json('Error, not found')
})
})

module.exports = route