const express = require("express");
const model = require("../models");
const _ = require("lodash");

// create products
const createProducts = async function (req, res) {
  try {
    let productData = _.pick(req.body, [
      "product_Id",
      "product_desc",
      "product_title",
      "product_img",
      "brand_id",
      "brand_img",
      "quantity",
      "price",
    ]);
    try {
      let data = await model.Product.create(productData);
      res.status(200).json({
        msg: "product data saved successfully in db",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        msg: "something went wrong while storing product data to db",
        error: error,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "something wrong happened while fetching product data",
      error: error,
    });
  }

  res.status(200).json({
    msg: "product is created",
    data: productData,
  });
};

//Read products

const showProducts = async function(req,res){
    try {
        let productsData = await model.Product.findAll()
        res.status(200).json({
            msg:"all products would be listed here",
            data:productsData
        })
        console.log(productData)
    } catch (error) {
        res.status(500).json({
            msg:"something went wrong while displaying all product data",
            error:error
        })
    }
}


module.exports = {
  createProducts,
  showProducts
};
