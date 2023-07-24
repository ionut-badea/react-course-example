import styles from './index.module.css';

function SuperheroDetailsListItem(props) {
    const { title, children } = props;

    return (
        <li className={styles.superhero__details__list__item}>
            <span className={styles.superhero__details__list__item__title}>
                {title}:&#xa0;
            </span>
            <span className={styles.superhero__details__list__item__value}>
                {children}
            </span>
        </li>
    );
}

export default SuperheroDetailsListItem;
