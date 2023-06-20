import React from 'react';
import Item from '../item/index.jsx';
import styles from "./styles.module.css";

const List = ({data, ...rest}) => {
    return (
        <ul className={styles.list}>
            {data?.map(item => <li key={item.id}><Item item={item} {...rest}/></li>)}
        </ul>
    );
};

export default List;