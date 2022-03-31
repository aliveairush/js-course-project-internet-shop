import React, {useState} from 'react';
import Counter from "./counter";
import styles from './countersList.module.css'

const CountersList = () => {

  const initialState = [
    {id: 0, value: 0, name: "Ложка", price: "200"},
    {id: 1, value: 0, name: "Вилка", price: "100"},
    {id: 2, value: 0, name: "Тарелка", price: "140"},
    {id: 3, value: 0, name: "Кружка", price: "300"},
  ]

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId) => {
    const newState = [...counters];
    const counterToUpdate = newState.find(counter => counter.id === counterId);
    counterToUpdate.value++;
    setCounters(newState);
  }

  const handleDecrement = (counterId) => {
    const newState = [...counters];
    const counterToUpdate = newState.find(counter => counter.id === counterId);

    // If counter value more than Zero then decrement and update the state
    if (counterToUpdate.value > 0) {
      counterToUpdate.value--
      setCounters(newState);
    }
  }


  return (
    <div className={styles.counterListContainer}>
      <ul className={`${styles.counterList} ${styles.paddingLeftRight2}`}>
        {counters.map(counter => <li key={counter.id} className={styles.counterListItem}>
          <Counter {...counter}
                   onIncrement={handleIncrement}
                   onDecrement={handleDecrement}/>
        </li>)}
      </ul>
      <button className={`btn btn-primary ${styles.marginLeftRight2}`} onClick={()=> setCounters(initialState)}>Сброс</button>
    </div>
  );
}

export default CountersList;