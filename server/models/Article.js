var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

  title: {
    type: String,
    default: '',
  //  required: 'Please fill Article title',
    trim: true
  },

  content: {
    type: String,
    default: '',
    trim: true
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Article = mongoose.model('Article', ArticleSchema, 'articles');
module.exports = Article;
