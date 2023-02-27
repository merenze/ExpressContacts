import PaginatorTable from '../../components/paginator/paginator-table';

fetch("#{process.env.APP_URL + '/api/contacts'}")
    .then(response => {
        console.log(response);
        response.json();
    })
    .then(data => ReactDOM.render(
        React.createElement(PaginatorTable, { contacts: data }),
        document.getElementById("paginator")
    ));