import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Category from './../components/category/category.jsx';
import Product from './../components/product/product.jsx';
import Nav from './../components/nav/nav';

let data = [];

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      name
      description
      image
      largeImage
      price
    }
  }
`;

const Home = (props) => (
  <React.Fragment>
    <Nav />
    <Query query={ALL_PRODUCTS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return data.products.map(({ uuid, name, price, store }, j) => (
          <Product
            key={j}
            uuid={uuid}
            name={name}
            price={price}
            store={store}
          />
        ));
      }}
    </Query>
    {/* {data.map(({ uuid, products, categoryName }, i) => (
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
    ))} */}
  </React.Fragment>
);

export default Home;
