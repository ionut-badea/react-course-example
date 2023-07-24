import styles from './index.module.css';

function SuperheroTitle(props) {
    const { id, name } = props;

    return (
        <h1 className={styles.superhero__title}>
            {id} - {name}
        </h1>
    );
}

export default SuperheroTitle;
