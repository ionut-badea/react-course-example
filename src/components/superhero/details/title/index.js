import styles from './index.module.css';

function SuperheroDetailsTitle(props) {
    const { children } = props;

    return <h2 className={styles.superhero__details__title}>{children}</h2>;
}

export default SuperheroDetailsTitle;
