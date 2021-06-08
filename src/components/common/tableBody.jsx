import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {

    const renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path);
    };

    const createKey = (item, column) => {
        return item._id + (column.path || column.key)
    };
    
    return (
        <tbody>
            {data.map((item, index) => 
                <tr key={item._id}>
                    <td>{ index + 1 }</td>
                    {columns.map(column =>
                        <td key={createKey(item, column)}>
                            {renderCell(item, column)}
                        </td>
                    )}
                </tr>
                
            )}
        </tbody>
    );
}
 
export default TableBody;