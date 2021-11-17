'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_Id: {
        type: Sequelize.BIGINT
      },
      product_desc: {
        type: Sequelize.TEXT
      },
      product_title: {
        type: Sequelize.STRING
      },
      product_img: {
        type: Sequelize.STRING
      },
      brand_id: {
        type: Sequelize.BIGINT
      },
      brand_img: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.BIGINT
      },
      // createdAt: {
      //   allowNull: true,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: true,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};