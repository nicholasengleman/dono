import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
    query getProducts {
        products {
            name
        }
    }
`;
export default GET_PRODUCTS;
