import SuperheroDetailsList from '../list';
import SuperheroDetailsListItem from '../list/item';
import SuperheroDetailsTitle from '../title';
import styles from './index.module.css';

function SuperheroDetailsBiography(props) {
    const {
        aliases,
        alignment,
        alterEgos,
        firstAppearance,
        fullName,
        placeOfBirth,
    } = props;

    return (
        <div className={styles.superhero__biography}>
            <SuperheroDetailsTitle>Biography</SuperheroDetailsTitle>
            <SuperheroDetailsList>
                <SuperheroDetailsListItem title="Full name">
                    {fullName}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Alter Egos">
                    {alterEgos}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Aliases">
                    {aliases.map((alias) => (
                        <div>{alias}</div>
                    ))}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Place of birth">
                    {placeOfBirth}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="First appearance">
                    {firstAppearance}
                </SuperheroDetailsListItem>
                <SuperheroDetailsListItem title="Alignment">
                    {alignment}
                </SuperheroDetailsListItem>
            </SuperheroDetailsList>
        </div>
    );
}

export default SuperheroDetailsBiography;
