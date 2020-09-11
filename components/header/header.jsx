import Login from '../auth/Login';
import Logout from '../auth/Logout';
import styles from './header.module.scss';

const Header = ({ loggedIn }) => {
    return (
        <div className={styles.header}>
            <div>
                <button className={styles.btn}>Home</button>
                <button className={styles.btn}>Profile</button>
            </div>
            {loggedIn ? <Logout /> : <Login />}
        </div>
    );
};

export default Header;
