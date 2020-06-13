const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    companyCNPJ: {
        type: String,
        required: true,
    },
    Usertype: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

module.exports = mongoose.model('User', UserSchema);