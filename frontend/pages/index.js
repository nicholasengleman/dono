import Category from "./../components/category/category.jsx";
import Product from "./../components/product/product.jsx";
import Nav from "./../components/nav/nav";

const data = [
  {
    uuid: 1,
    categoryName: "Shoes",
    products: [
      {
        uuid: 2,
        name: "Shoes",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 3,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 4,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 5,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
    ],
  },
  {
    uuid: 6,
    categoryName: "Goals",
    products: [
      {
        uuid: 7,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 8,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 9,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 10,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
    ],
  },
  {
    uuid: 11,
    categoryName: "Charities",
    products: [
      {
        uuid: 12,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 13,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 14,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
      {
        uuid: 15,
        name: "Name",
        price: 5,
        store: "amazon.com",
        description: "description",
      },
    ],
  },
];

const Home = (props) => (
  <React.Fragment>
    <Nav />
    {data.map(({ uuid, products, categoryName }, i) => (
      <Category key={i} name={categoryName} uuid={uuid}>
        {products.map(({ uuid, name, price, store }, j) => (
          <Product
            key={j}
            uuid={uuid}
            name={name}
            price={price}
            store={store}
          />
        ))}
      </Category>
    ))}
  </React.Fragment>
);

export default Home;
