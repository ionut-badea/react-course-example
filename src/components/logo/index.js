import logo from '../../logo.svg';
import styles from './index.module.css';

function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="logo" width={64} />
            <span className={styles.logo__text}>Superheroes</span>
        </div>
    );
}

export default Logo;
