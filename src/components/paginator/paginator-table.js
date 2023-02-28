import React from 'react';
import PaginatorRow from './paginator-row';

export default function PaginatorTable({ contacts }) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Middle Name</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <PaginatorRow contact={contact} />
        ))}
      </tbody>
    </table>
  );
}