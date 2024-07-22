import * as React from 'react';
import * as styles from './Sidebar.module.scss';

import Bio from '../../Bio';
import Categories from '../../Categories';

export default function Sidebar({ location }) {
    return (
        <div className={styles.sidebar}>
            <Bio />
            <Categories location={location} />
        </div>
    )
}

