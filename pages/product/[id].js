import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "./../../lib/withApollo";
import GET_PRODUCT from "./../../queries/getProduct";
import styles from "./styles.module.scss";
import Header from '../../components/header/header';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  const { products_by_pk: info } = data;

  return (
    <>
    <Header loggedIn={true} />
    <div className={styles.productContainer}>
      <div className={styles.row}>
        <div className={styles.image}></div>
        <div className={styles.text}>
          <div className={styles.name}>{info.name}</div>
          <div className={styles.price}>${info.price}</div>
          <div className={styles.store}>{info.store}</div>
          <div className={styles.description}>{info.description}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.like}>Likes: {info.likes}</div>
        <div className={styles.save}>Saves: 10</div>
      </div>
    </div>
    </>
  );
};

export default withApollo()(Product);
