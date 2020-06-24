// Demo User Data
const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'nicholas@englemaninvest.com',
    age: 33,
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@englemaninvest.com',
    age: 28,
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@englemaninvest.com',
  },
];

// Demo Product Data
const products = [
  {
    id: '11',
    userId: '1',
    name: 'Dress',
    price: 5,
  },
  {
    id: '12',
    userId: '2',
    name: 'Shirt',
    price: 10,
  },
  {
    id: '13',
    userId: '3',
    name: 'TV',
    price: 15,
  },
];

const db = {
  users,
  products,
};

export { db as default };
