const Mutation = {
  async createProduct(parent, args, { db }, info) {
    const product = await db.mutation.createProduct(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return product;
  },
};

module.exports = Mutation;
