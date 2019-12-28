const moongose = require('mongoose');

const UserSchema = new mongoose.UserSchema({
    email: String,
})

mongoose.exports = mongoose.model('User', UserSchema);