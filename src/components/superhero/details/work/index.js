import SuperheroDetailsList from '../list';
import SuperheroDetailsListItem from '../list/item';
import SuperheroDetailsTitle from '../title';
import styles from './index.module.css';

function SuperheroDetailsWork(props) {
    const { occupation, base } = props;

    return (
        <div className={styles.superhero__work}>
            <SuperheroDetailsTitle>Work</SuperheroDetailsTitle>
            <SuperheroDetailsList>
                <SuperheroDetailsListItem title="Occupation">
                    {occupation}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Base">
                    {base}
                </SuperheroDetailsListItem>
            </SuperheroDetailsList>
        </div>
    );
}

export default SuperheroDetailsWork;
