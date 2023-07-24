import styles from './index.module.css';
import SuperheroDetails from '../details';
import Card from '../../card';
import Image from '../image';
import SuperheroTitle from '../title';
import SuperheroSection from './section';

function SuperheroSections(props) {
    const { superhero } = props;

    return (
        <Card>
            <div className={styles.superhero__sections}>
                <SuperheroSection>
                    <Image src={superhero.image.url} />
                </SuperheroSection>
                <SuperheroSection direction="column" wFull>
                    <SuperheroTitle id={superhero.id} name={superhero.name} />
                    <SuperheroDetails
                        appearance={superhero.appearance}
                        biography={superhero.biography}
                        connections={superhero.connections}
                        powerstats={superhero.powerstats}
                        work={superhero.work}
                    />
                </SuperheroSection>
            </div>
        </Card>
    );
}

export default SuperheroSections;
