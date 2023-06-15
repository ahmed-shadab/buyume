const productModel = require('../model/products')
module.exports.operation = async (req, res) => {
    const data = req.body;
    for(let i=0; i<data.length; i++){
        let result = await productModel.findData({productId:data[i].productId})
        if(result){
            if(data[i].operation == "add"){
                result.quantity= Number(result.quantity)+Number(data[i].quantity);
            }
            else{
                if(result.quantity<data[i].quantity){
                    throw new Error(`product id ${data[i].productId} quantity is less to subtract`)
                }
                else{
                    result.quantity-=data[i].quantity;
                }
            }
            const updateData = await productModel.updateData({productId:data[i].productId}, {quantity:result.quantity});
            console.log(updateData);
        }
        else{
            await productModel.insertData({productId:data[i].productId,quantity:data[i].quantity});
        }
    }
    res.status(202).send("Ok")
}