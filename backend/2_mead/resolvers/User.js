const User = {
  products(parent, args, { db }, info) {
    return db.products.filter((product) => {
      return product.userId === parent.id;
    });
  },
};

export { User as default };
