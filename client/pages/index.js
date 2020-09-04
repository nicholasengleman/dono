import Login from '../components/Auth/Login';
import Logout from '../components/Auth/Logout';
import { withApollo } from '../lib/withApollo';
import { useFetchUser } from '../lib/user';
import ProductList from '../components/productList/productList';

const Home = () => {
    const { user, loading } = useFetchUser();
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!loading && !user) {
        return <Login />;
    }

    return (
        <>
            <div>Home</div>
            <Logout />

            <ProductList />
        </>
    );
};

export default withApollo()(Home);
