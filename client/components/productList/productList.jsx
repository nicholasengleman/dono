import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import GET_PRODUCTS from './../../queries/getProducts';
import styles from './productList.module.scss';

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
        <div className={styles.productList}>
            {data.products.map((el) => (
                <Link href='/product/[id]' as={`/product/${el.id}`}>
                    <a>
                        <div className={styles.product}>
                            <div className={styles.image}></div>
                            <div className={styles.content}>
                                <div className={styles.row}>
                                    <div className={styles.name}>{el.name}</div>
                                    <div className={styles.price}>
                                        ${el.price}
                                    </div>
                                </div>
                                <div className={styles.store}>{el.store}</div>
                                <div className={styles.description}>
                                    {el.description}
                                </div>
                                <div className={styles.actions}>
                                    <div className={styles.likes}>
                                        Likes: {el.likes}
                                    </div>
                                    <div className={styles.saves}></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
