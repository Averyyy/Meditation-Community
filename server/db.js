const mongoose = require('mongoose'),
	URLSlugs = require('mongoose-slug-plugin'),
  passportLocalMongoose = require('passport-local-mongoose');
const url = process.env.MONGODB_URI || 'mongodb://localhost/meditation';

const User = new mongoose.Schema({
  username: {type:String, required: true},
  salt: {type:String, required: true},
  hash: {type: String, required: true},
  scores:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'score' }],
  blogs:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'blo' }],
  replies:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'reply' }]
  
});

const score = new mongoose.Schema({
  username: {type:String, required: true},
	time: {type: String,  required: true},
	Duration: {type: Number, min:0,  required: true}
}, {
	_id: true
});

const blo = new mongoose.Schema({
  username: {type:String, required: true},
	time: {type: String,  required: true},
	title: {type: String,  required: true},
	content: {type:String, required:true},
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reply' }]
}, {
	_id: true
});

const reply = new mongoose.Schema({
  username: {type:String, required: true},
  time: {type: String,  required: true},
  blogto: {type: mongoose.Schema.Types.ObjectId, ref: 'blo'},
  content: {type:String, required:true}
}, {
  _id: true
});


// const Scores = new mongoose.Schema({
//   user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
// 	createdAt: {type: Date, required: true},
// 	items: [score]
// });

// const Blogs = new mongoose.Schema({
// 	user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
// 	  createdAt: {type: Date, required: true},
// 	  lists: [blo]
//   });

User.plugin(passportLocalMongoose);
// Scores.plugin(URLSlugs, { tmpl: '<%=name%>' });

mongoose.model('User', User);
mongoose.model('blo',blo);
// mongoose.model('Blogs', Blogs);
// mongoose.model('Scores', Scores);
mongoose.model('score', score);
mongoose.model('reply', reply);


const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
connect
  .then(db => {
    console.log("connected to db")
  })
  .catch(err => {
    console.log(err)
  })
