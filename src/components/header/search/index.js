import styles from './index.module.css';

function Search(props) {
    return (
        <input
            className={styles.search}
            placeholder="Search"
            onInput={(e) => props.onInput(e.currentTarget.value)}
        />
    );
}

export default Search;
