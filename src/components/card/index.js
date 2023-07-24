import styles from './index.module.css';

function Card(props) {
    const { children } = props;

    return <div className={styles.card}>{children}</div>;
}

export default Card;
