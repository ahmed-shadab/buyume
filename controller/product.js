const productModel = require('../model/products')
exports.getData = async (req, res, next) => {
    const data = await productModel.getData()
    return res.status(200).json(data)
}

exports.postData = async (req, res, next) => {
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const operation = req.body.operation;
    productModel.postData({ productId: productId, quantity: quantity, operation: operation }).then((result) => {
        console.log(result);
        return res.status(201).send("data successfully inserted");
    }).catch(err => {
        console.log('error', err);
    })
}
exports.postMultipleData = async(req, res, next) => {
    // Promise.all
    console.log(req.body);
    const myPromises = [];
    for(let i=0; i<req.body.length;i++){
        myPromises.push(productModel.postData(req.body[i]));
    }
    Promise.all(myPromises).then(res=>{
        console.log('Result',res);
    }).catch(err=>{
        console.log(err);
    })
    return res.send("true")

}