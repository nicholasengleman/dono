import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
    query getProducts {
        products {
            name
            price
            store
            description
            likes
            id
        }
    }
`;
export default GET_PRODUCTS;
