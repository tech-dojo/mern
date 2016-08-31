var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KewlTextSchema = {

location: { 
 type: String,
 default: '',  
 trim: true 
}, 
updated: { 
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

var KewlText = mongoose.model('KewlText', KewlTextSchema,'kewlTexts');
module.exports = KewlText;
