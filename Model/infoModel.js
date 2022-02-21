const mongoose = require("../database");

const userSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: [true, 'User Must Have Full Name'],
    },
    userName: {
        type: String,
        required: [true, 'User Must Have User Name'],
    },

    email: String,
    image: String,
    cv: String,


});


var User = db.model('User', userSchema);

module.exports = User;