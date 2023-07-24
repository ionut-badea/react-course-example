import styles from './index.module.css';

function SuperheroSection(props) {
    const { children, direction = 'row', wFull } = props;
    const flexDirection = styles[`superhero__section--${direction}`];
    const fullWidth = wFull ? styles['superhero__section--w-full'] : '';

    return (
        <section
            className={`${styles.superhero__section} ${flexDirection} ${fullWidth}`}
        >
            {children}
        </section>
    );
}

export default SuperheroSection;
