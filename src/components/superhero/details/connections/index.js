import SuperheroDetailsList from '../list';
import SuperheroDetailsListItem from '../list/item';
import SuperheroDetailsTitle from '../title';
import styles from './index.module.css';

function SuperheroDetailsConnections(props) {
    const { groupAffiliation, relatives } = props;

    return (
        <div className={styles.superhero__connections}>
            <SuperheroDetailsTitle>Connections</SuperheroDetailsTitle>
            <SuperheroDetailsList>
                <SuperheroDetailsListItem title="Group Affiliation">
                    {groupAffiliation}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Relatives">
                    {relatives}
                </SuperheroDetailsListItem>
            </SuperheroDetailsList>
        </div>
    );
}

export default SuperheroDetailsConnections;
