const Product = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.userId;
    });
  },
};

export { Product as default };
