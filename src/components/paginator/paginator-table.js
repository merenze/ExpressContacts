import React from 'react';
import PaginatorRow from './paginator-row';

export default function PaginatorTable({ contacts }) {
  return ( 
    <table>
      <tr>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Middle Name</th>
      </tr>
      {contacts.map(contact => (
        <PaginatorRow contact={contact} />
      ))}
    </table>
  );
}