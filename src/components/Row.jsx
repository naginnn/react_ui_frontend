import React from 'react';
import classes from './Row.module.css'
const Row = (props) => {
    return (
        <td className={classes.MyRow}>
            {props.value}
        </td>
    );
};

export default Row;