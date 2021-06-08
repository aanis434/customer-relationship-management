import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ data, columns }) => {
    return (
        <table className="table table-bordered table-md">
            <TableHeader
                columns={columns}
            />
            <TableBody
                data={data}
                columns={columns}
            />
        </table>
     );
}
 
export default Table;