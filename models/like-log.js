const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  rent: { type: Schema.Types.ObjectId, ref: 'Rent' },
  building_detail: {type: Schema.Types.ObjectId, ref: 'Building_detail'},
  rent_name: {type:String },
  building_name : {type:String},
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
var LikeLog = mongoose.model('LikeLog', schema);

module.exports = LikeLog;

