import React from 'react';

export default function NavBar({ content, href }) {
    return (
        <li class="nav-item">
            <a class="nav-link" href={href}>
                {content}
            </a>
        </li>
    );
}