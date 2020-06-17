const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return users.filter((user) => {
      return user.name
        .toLocaleLowerCase()
        .includes(args.query.toLocaleLowerCase());
    });
  },
  me() {
    return {
      id: '1233423423',
      name: 'mike@example.com',
      age: 33,
    };
  },
  products(parent, args, { db }, info) {
    return db.products;
  },
};

export { Query as default };
