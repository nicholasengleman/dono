import { useQuery } from '@apollo/react-hooks';
import GET_PRODUCTS from './../../queries/getProducts';

const ProductList = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

    return (
        <div>
            Products:
            <div>{data.products.map((el) => el.name)}</div>
        </div>
    );
};

export default ProductList;
