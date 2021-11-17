"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      product_Id: DataTypes.BIGINT,
      product_desc: DataTypes.TEXT,
      product_title: DataTypes.STRING,
      product_img: DataTypes.STRING,
      brand_id: DataTypes.BIGINT,
      brand_img: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Product",
    },{
      timestamps: false,
    }
  );
  return Product;
};
