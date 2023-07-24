import { useEffect, useState } from 'react';
import styles from './index.module.css';
import SuperheroSections from './sections';

function Superhero() {
    const [superhero, setSuperhero] = useState();
    const [loading, setLoading] = useState(true);

    const accessToken = process.env.REACT_APP_SUPERHERO_ACCESS_TOkEN;
    const url = `https://superheroapi.com/api.php/${accessToken}/457`;

    async function getSuperhero() {
        await fetch(url, {
            header: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setSuperhero(data);
            })
            .catch((error) => {
                console.log(
                    'Something went wrong in getSuperhero method.',
                    error
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getSuperhero();
    }, []);

    return (
        <main className={styles.superhero}>
            {!loading && <SuperheroSections superhero={superhero} />}
        </main>
    );
}

export default Superhero;
