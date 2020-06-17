import { v4 as uuidv4 } from 'uuid';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => {
      return user.email === args.email;
    });
    if (emailTaken) {
      throw new Error('Email Taken');
    }

    const user = {
      id: uuidv4(),
      name: args.name,
      email: args.email,
      age: args.age,
    };

    db.users.push(user);
    return user;
  },
  createProduct(parent, args, { db }, info) {
    const userExists = db.users.some((user) => {
      return user.id === args.userId;
    });

    if (!userExists) {
      throw new Error('User does not exist');
    }

    const product = {
      id: uuidv4(),
      userId: args.userId,
      name: args.name,
      price: args.price,
    };

    db.products.push(product);
    return product;
  },
};

export { Mutation as default };
