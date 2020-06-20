const { forwardTo } = require('prisma-binding');

const Query = {
  products: forwardTo('db'),
  //   async products(parent, args, { db }, info) {
  //     const products = await db.query.products();

  //     return products;
  //   },
};

module.exports = Query;
