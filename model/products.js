// const model = require('../util/database');
const mongoose = require("mongoose");
main().catch(err=>{console.log('err',err)});
async function main(){
    await mongoose.connect('mongodb://localhost:27017/myproductDB');
}
const schema = {
    productId: Number,
    quantity: String,
    operation: String
}

const productSchema = new mongoose.Schema(schema);
const model = new mongoose.model('product', productSchema);

exports.getData = async () => {
    const result = await model.find()
    return result
}
exports.postData = (data) => {
    const productData = new model(data);
    return productData.save();
}