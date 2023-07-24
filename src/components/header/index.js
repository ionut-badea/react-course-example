import { useState } from 'react';
import Logo from '../logo';
import styles from './index.module.css';
import Search from './search';

function Header() {
    const [name, setName] = useState();

    const getName = (name) => setName(name);

    return (
        <nav className={styles.nav}>
            <Logo />
            <div>{name}</div>
            <Search onInput={getName} />
        </nav>
    );
}

export default Header;
