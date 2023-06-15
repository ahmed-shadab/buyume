// const model = require('../util/database');
const mongoose = require("mongoose");
main().catch(err=>{console.log('err',err)});
async function main(){
    await mongoose.connect('mongodb://localhost:27017/myproductDB');
}
const schema = {
    productId: Number,
    quantity: String
}

const productSchema = new mongoose.Schema(schema);
const model = new mongoose.model('product', productSchema);

module.exports.findData = async (data) => {
    return model.findOne(data);
}

module.exports.updateData = async (filter, data) => {
    return model.updateOne(filter,data);
}

module.exports.insertData = async(data) => {
    const product = new model(data)
    return product.save()
}