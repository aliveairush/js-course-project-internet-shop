import React from 'react';

import styles from './counter.module.css'
import Badge from "./badge";

const Counter = (props) => {

  return (<div className={styles.counter} >
    <div className={styles.counterName}>{props.name}</div>
    {props.value ? <Badge value={props.value}/> : <Badge value="empty" color="warning" />}
    <button onClick={() => props.onIncrement(props.id)} className="btn btn-primary">+</button>
    <button onClick={() => props.onDecrement(props.id)} className="btn btn-primary">-</button>
    <button onClick={() => props.onDelete(props.id)} className="btn btn-danger" >Delete</button>
</div>)
}

export default Counter;