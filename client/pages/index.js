import { useQuery } from "@apollo/react-hooks";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";
import { withApollo } from "../lib/withApollo";
import { useFetchUser } from '../lib/user'
//import QUERY from "./../queries/fetchUserProducts";

const Home = () => {

  const { user, loading } = useFetchUser()
  if(loading) {
    return <div>Loading...</div>
  }
  if (!loading && !user) {
    return <Login />
  }

  return (<>
    <div>Home</div>
    <Logout/>
    </>
  )


 
};

export default withApollo()(Home);
 