const Joi = require("joi");

const validateProduct = async function(req,res,next){

const productSchema = Joi.object({
  product_Id: Joi.number().integer().required(),
  product_desc: Joi.string().lowercase().required(),
  product_title: Joi.string().max(50).required(),
  product_img: Joi.string().required(),
  brand_id: Joi.number().integer().required(),
  brand_img: Joi.string(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});

  try {
    const value = await productSchema.validateAsync(req.body);
    // console.log(value);
    next();
  } catch (error) {
    res.status(500).json({
      msg: "something is wrong with the data validation",
      error: error,
    });
  }
};


module.exports={
  validateProduct
}

// product_Id: DataTypes.BIGINT,
// product_desc: DataTypes.TEXT,
// product_title: DataTypes.STRING,
// product_img: DataTypes.STRING,
// brand_id: DataTypes.BIGINT,
// brand_img: DataTypes.STRING,
// quantity: DataTypes.INTEGER,
// price: DataTypes.BIGINT,
