const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;