import React from "react";
import NavItem from './nav-item';

export default function NavBar() {
  return (
    <nav class="nav navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="nav">
        <NavItem content="Home" href="/" />
        <NavItem content="Contacts" href="/contacts" />
      </ul>
    </nav>
  );
}