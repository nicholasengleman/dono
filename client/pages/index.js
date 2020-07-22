import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import QUERY from "./../queries/fetchProducts";

const Home = () => {
  const { loading, data } = useQuery(QUERY);

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  return <div>Home</div>;
};

export default withApollo(Home);
