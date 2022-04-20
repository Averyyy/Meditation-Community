const async = require('hbs/lib/async');

const express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Scores = mongoose.model('Scores');
	Blogs = mongoose.model('Blogs');
	blo = mongoose.model('blo');

const isAuthenticated = (req, res, next) => {
  if(!req.user) {
    res.redirect('/'); 
    console.log('redirecting');
  } else {
    next();

  }
}

router.use(isAuthenticated)

router.get('/', (req, res) => {
	// Blogs.find({user: req.user ? req.user._id : undefined}, (err, blo, count) => {
	// 	res.render('list-all.hbs', {lists:blo});
	// });
});

router.get('/create', (req, res) => {
  res.render('list-create.hbs');
});

router.post('/create', async (req, res) => {
	const {title, content} = req.body;
	let date_ob = new Date(Date.now());
	let date = date_ob.getDate();
	let month = date_ob.getMonth() + 1;
	let year = date_ob.getFullYear();
	let time = year + "-" + month + "-" + date+' '+date_ob.getHours()+':'+date_ob.getMinutes();
	const bloi = new blo({
		title: title,
		content: content,
		time: time
	});
	// await bloi.save();
	// find blog in the database and update it
	const blog = await Blogs.findOne({user: req.user ? req.user._id : undefined});
	if (blog) {
		blog.lists.push(bloi);
		await blog.save();
	}else{
		const blog = new Blogs({
			user: req.user ? req.user._id : undefined,
			createdAt: time,
			lists: [bloi]
		});
		await blog.save();
	}
	res.redirect('/list/show');
});

router.get('/show', async (req, res) => {
	const blog = await Blogs.findOne({user: req.user ? req.user._id : undefined});
	// console.log(blog.lists);
	res.render('list-all.hbs', {lists:blog.lists});
});

// router.get('show-all', async (req, res) => {
// 	const blog = await Blogs.find();
// 	res.render('list-all.hbs', {lists:blog.lists});
// });

router.get('/:slug', async (req, res) => {
	const {slug} = req.params;
	console.log(req.params);
	const blog = await Blogs.findOne({user: req.user ? req.user._id : undefined});
	const bloi = blog.lists.find(list => list.title === slug);
	// console.log(bloi);
	res.render('list-slug.hbs', {title:slug, blog:bloi.content});

});

module.exports = router;
