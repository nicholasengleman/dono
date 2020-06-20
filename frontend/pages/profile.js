import Profile from './../components/profile/profile.jsx';
import Category from './../components/category/category.jsx';
import Product from './../components/product/product.jsx';

let data = [];

const App = (props) => (
  <React.Fragment>
    <Profile />
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

export default App;
