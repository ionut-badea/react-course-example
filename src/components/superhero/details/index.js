import SuperheroDetailsAppearance from './appearance';
import SuperheroDetailsBiography from './biography';
import SuperheroDetailsConnections from './connections';
import styles from './index.module.css';
import SuperheroDetailsPowerstats from './powerstats';
import SuperheroDetailsWork from './work';

function SuperheroDetails(props) {
    const { appearance, biography, connections, powerstats, work } = props;

    return (
        <div className={styles.superhero__details}>
            <SuperheroDetailsBiography
                aliases={biography.aliases}
                alignment={biography.alignment}
                alterEgos={biography['alter-egos']}
                firstAppearance={biography['first-appearance']}
                fullName={biography['full-name']}
                placeOfBirth={biography['place-of-birth']}
            />
            <SuperheroDetailsPowerstats
                combat={powerstats.combat}
                durability={powerstats.durability}
                intelligence={powerstats.intelligence}
                power={powerstats.power}
                speed={powerstats.speed}
                strength={powerstats.strength}
            />
            <SuperheroDetailsAppearance
                eyeColor={appearance['eye-color']}
                gender={appearance.gender}
                hairColor={appearance['hair-color']}
                height={appearance.height}
                race={appearance.race}
                weight={appearance.weight}
            />
            <SuperheroDetailsConnections
                groupAffiliation={connections['group-affiliation']}
                relatives={connections.relatives}
            />
            <SuperheroDetailsWork
                base={work.base}
                occupation={work.occupation}
            />
        </div>
    );
}

export default SuperheroDetails;
