import styles from './index.module.css';

function Image(props) {
    return (
        <img
            className={styles.superhero__image}
            src={props.src}
            alt="superhero"
            width={360}
            height={480}
        />
    );
}

export default Image;
