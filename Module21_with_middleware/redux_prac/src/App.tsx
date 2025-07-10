import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Redux/features/counter/counterSlice'
import type { AppDispatch, RootState } from './Redux/store'

function App() {

  const dispatch: AppDispatch = useDispatch()
  const { count } = useSelector((state: RootState) => state.counter)

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount))
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div className='box'>
        <p onClick={handleDecrement}>-</p>
        <button>Count is {count}</button>
        <p onClick={() => handleIncrement(1)}>+</p>
        <button onClick={() => handleIncrement(5)}>increment by 5</button>
      </div>
    </>
  )
}

export default App
