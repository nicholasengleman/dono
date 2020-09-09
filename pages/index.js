import { withApollo } from '../lib/withApollo';
import { useFetchUser } from '../lib/user';
import ProductList from '../components/productList/productList';
import Header from '../components/header/header';

const Home = () => {
    const { user, loading } = useFetchUser();
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!loading && !user) {
        return <Header loggedIn={false} />;
    }

    return (
        <>
            <Header loggedIn={true} />
            <ProductList />
        </>
    );
};

export default withApollo()(Home);
