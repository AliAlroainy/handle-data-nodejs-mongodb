const mongoose = require("../database");
  
var imageSchema = new  mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

var cv = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('Image', imageSchema);
module.exports = new mongoose.model('cv', cv);