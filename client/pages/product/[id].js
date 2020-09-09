import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from './../../lib/withApollo';
import GET_PRODUCT from './../../queries/getProduct';

const Product = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, data } = useQuery(GET_PRODUCT, {
        variables: { id },
    });

    if (loading || !data) {
        return <h1>loading...</h1>;
    }

    return <div></div>;
};

export default withApollo()(Product);
