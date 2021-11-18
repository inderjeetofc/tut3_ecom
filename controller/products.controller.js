const express = require("express");
const model = require("../models");
const _ = require("lodash");
const  sequelize  = require('sequelize')

// create products
const createProducts = async function (req, res) {
  try {
    let productData = req.body;
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
// [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'] --- querying
//Read products

const showProducts = async function (req, res) {
  try {
    let productsData = await model.Product.findAll();
    res.status(200).json({
      msg: "all products would be listed here",
      data: productsData,
    });
    console.log(productData);
  } catch (error) {
    res.status(500).json({
      msg: "something went wrong while displaying all product data",
      error: error,
    });
  }
};


// filter product by id
const filterProductsById = async function (req,res) {
  let productId = req.params.id;
  let foundProduct = await model.Product.findByPk(productId);
  if (foundProduct === null) {
    res.status(200).json({
      msg: "No product found with that id",
    });
  } else {
    try {
      res.status(200).json({
        msg: "Your product is here",
        foundProduct,
      });
    } catch (error) {
      res.status(500).json({
        msg: "something is wrong while finding product by id",
        error,
      });
    }
  }
};



// update product by id
const updateProducts = async function (req, res) {
  let productId = req.params.id;
  // console.log(`prodt id is : ${productId}`);
  let productData = await model.Product.findByPk(productId);
  if (productData === null) {
    res.status(500).json({
      msg: "could not find the product",
    });
  } else {
    try {
      await model.Product.update(req.body, { where: { id: productId } });
      res.status(200).json({
        msg: `product with id : ${productId} is updated`,
        updatedProduct: req.body,
      });
    } catch (error) {
      res.status(500).json({
        msg: "something went wrong while updating data",
        error: error,
      });
    }
  }
};
module.exports = {
  createProducts,
  showProducts,
  updateProducts,
  filterProductsById,
};
