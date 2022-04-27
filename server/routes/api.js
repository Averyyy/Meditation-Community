const express = require('express');
const { route } = require('express/lib/application');
const mongoose = require('mongoose');
const User = mongoose.model('User');
// const Scores = mongoose.model('Scores');
const score = mongoose.model('score');
const blo = mongoose.model('blo');
const reply = mongoose.model('reply');


const router = express.Router();

router.get('/scores', async (req, res) => {
    const getdata = await score.find({});
    const scoreboard = getdata.map(data => {
        return {username: data.username, Duration: data.Duration}});
    const senddata = {};
    for (let i = 0; i < scoreboard.length; i++) {
        if (!(scoreboard[i].username in senddata)) {
            senddata[scoreboard[i].username] = scoreboard[i].Duration;
        } 
        else {
            if (senddata[scoreboard[i].username] < scoreboard[i].Duration) {
            senddata[scoreboard[i].username] = scoreboard[i].Duration;}
        }
    }
    let sortable = [];
    for (let user in senddata) {
        sortable.push([user, senddata[user]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    res.json(sortable);
});

router.post('/scores', async (req, res) => {

    const {username, duration} = req.body;
    const now = Date(Date.now()).toString();
    const newScore = new score({username: username, time: now, Duration: duration});
    await newScore.save();
    const user = await User.findOne({username: username});
    user.scores.push(newScore);
    await user.save();
    res.send({success: true});

    // User.findOne({username}, (err, user) => {
    //     if (err) {res.send(err);} 
    //     else {user.scores.push(newScore);}
    //     user.save();
    //     newScore.save();
    //     res.send({success: true});});

});


router.get('/blogs', async (req, res) => {
    const getdata = await blo.find({});
    const senddata = []
    for (let i = 0; i < getdata.length; i++) {
        senddata.push({title: getdata[i].title, content: getdata[i].content, username: getdata[i].username, time: getdata[i].time, id: getdata[i]._id});
    }
    res.json(senddata);
});

router.post('/blogs', async (req, res) => {
    const {username, title, content} = req.body;
    const now = Date(Date.now()).toString();
    const newBlog = new blo({username: username, title: title, content: content, time:now});
    await newBlog.save();
    const user = await User.findOne({username: username});
    user.blogs.push(newBlog);
    await user.save();
    res.send({success: true});
});

router.get('/blogs/:id', async (req, res) => {
    const {id} = req.params;
    const getdata = await blo.find({_id: id});
    const replylist = await reply.find({blogto: id});
    const senddata = {title: getdata[0].title, content: getdata[0].content, username: getdata[0].username, time: getdata[0].time, id: getdata[0]._id, replies: replylist};
    res.json(senddata);
});

router.post('/blogs/:id', async (req, res) => {
    const {id} = req.params;
    const {username, content} = req.body;
    const now = Date(Date.now()).toString();
    const blogto = await blo.find({_id: id});
    const newReply = new reply({username: username, content: content, time: now, blogto: blogto[0]._id});
    await newReply.save();
    const blog = await blo.findOne({_id: id});
    blog.replies.push(newReply);
    await blog.save();
    const replylist = await reply.find({blogto: id});
    const sendBlog = {title: blog.title, content: blog.content, username: blog.username, time: blog.time, id: blog._id, replies: replylist};
    res.json(sendBlog);
});


module.exports = router;