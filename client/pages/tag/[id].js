import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import withApollo from "../../lib/withApollo";
import GET_TAG_PRODUCTS from "../../queries/getTagProducts";
import ProductShort from "./../../components/productShort/productShort.jsx";
import StyledContainer from "./container";

const TagHome = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(GET_TAG_PRODUCTS, {
    variables: { name: id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return <StyledContainer>{data && data.tag.products.map((product) => <ProductShort {...product} />)}</StyledContainer>;
};

export default withApollo(TagHome);
