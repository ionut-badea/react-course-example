import styles from './index.module.css';

function SuperheroDetailsList(props) {
    const { children } = props;

    return <ul className={styles.superhero__biography__list}>{children}</ul>;
}

export default SuperheroDetailsList;
