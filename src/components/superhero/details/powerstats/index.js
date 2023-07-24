import SuperheroDetailsList from '../list';
import SuperheroDetailsListItem from '../list/item';
import SuperheroDetailsTitle from '../title';
import styles from './index.module.css';

function SuperheroDetailsPowerstats(props) {
    const { combat, durability, intelligence, power, speed, strength } = props;

    return (
        <div className={styles.superhero__powerstats}>
            <SuperheroDetailsTitle>Powerstats</SuperheroDetailsTitle>
            <SuperheroDetailsList>
                <SuperheroDetailsListItem title="Intelligence">
                    {intelligence}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Strength">
                    {strength}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Speed">
                    {speed}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Durability">
                    {durability}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Power">
                    {power}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Combat">
                    {combat}
                </SuperheroDetailsListItem>
            </SuperheroDetailsList>
        </div>
    );
}

export default SuperheroDetailsPowerstats;
