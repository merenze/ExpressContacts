import React from 'react';
import { createRoot } from "react-dom/client";
import PaginatorTable from "../../components/paginator/paginator-table";

const paginatorRoot = createRoot(document.getElementById('paginator'));

fetch(`${process.env.APP_URL}/api/contacts`, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        paginatorRoot.render(<PaginatorTable contacts={data} />)
    })
    .catch(console.log);
