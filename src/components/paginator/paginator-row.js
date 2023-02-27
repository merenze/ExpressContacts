export default function PaginatorRow({ contact }) {
    return (
        <tr>
            <td>{contact.lastName}</td>
            <td>{contact.firstName}</td>
            <td>{contact.middleName}</td>
        </tr>
    );
};
