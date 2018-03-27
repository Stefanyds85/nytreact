const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    title: String,
    date: Number,
    url: String
});
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('Article', Article);