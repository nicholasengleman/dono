import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import withApollo from "../../lib/withApollo";
import QUERY from "../../queries/fetchProducts";

import ProfileHeader from "./../../components/profileHeader/profileHeader.jsx";
import Category from "./../../components/category/category.jsx";
import Product from "./../../components/product/product.jsx";

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(QUERY);

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <ProfileHeader />
      {data.categories.map(({ id, products, categoryName }, i) => (
        <Category key={i} name={categoryName} id={id}>
          {products.map(({ id, name, price, store }, j) => (
            <Product key={j} uuid={id} name={name} price={price} store={store} />
          ))}
        </Category>
      ))}
    </>
  );
};

export default withApollo(Profile);