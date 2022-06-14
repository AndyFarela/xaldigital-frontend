import React from 'react';
import DataTable from 'react-data-table-component';

function Table(props){
    console.log(props.data)
    return (
        <DataTable columns={props.columns} data={props.data} title="Items Stackoverflow" pagination searchTop searchBottom={false}></DataTable>
    )
}

export default Table;
