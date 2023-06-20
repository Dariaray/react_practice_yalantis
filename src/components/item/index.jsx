import React from 'react';
import styles from "./styles.module.css";

const Item = ({item, onComplete, onDelete}) => {
    console.log(item.completed);
    return (
        <div className={styles.item}>
            <input type="checkbox" onClick={() => onComplete(item.id)}/>
            <p className={item.completed ? styles.completed : null}>{item.title}</p>
            <button onClick={() => onDelete(item.id)}>&times;</button>
        </div>
    );
};

export default Item;