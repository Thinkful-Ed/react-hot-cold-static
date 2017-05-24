import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" aria-label="How to play" href="#modal">
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" aria-live="Start a new game" href="#feedback">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}
