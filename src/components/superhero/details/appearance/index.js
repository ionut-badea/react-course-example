import SuperheroDetailsList from '../list';
import SuperheroDetailsListItem from '../list/item';
import SuperheroDetailsTitle from '../title';
import styles from './index.module.css';

function SuperheroDetailsAppearance(props) {
    const { gender, race, height, weight, eyeColor, hairColor } = props;

    return (
        <div className={styles.superhero__appearance}>
            <SuperheroDetailsTitle>Appearance</SuperheroDetailsTitle>
            <SuperheroDetailsList>
                <SuperheroDetailsListItem title="Gender">
                    {gender}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Race">
                    {race}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Height">
                    {`${height[0]} | ${height[1]}`}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Weight">
                    {`${weight[0]} | ${weight[1]}`}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Eye color">
                    {eyeColor}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Hair color">
                    {hairColor}
                </SuperheroDetailsListItem>
            </SuperheroDetailsList>
        </div>
    );
}

export default SuperheroDetailsAppearance;
