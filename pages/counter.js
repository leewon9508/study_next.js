import {useDispatch, useSelector} from 'react-redux'
import {decrease, increase} from '../src/modules/counter'


export default function Counter() {
  const num = useSelector(state => {
    return state.counter
  });

  const dispatch = useDispatch();
  const inc = ()=>{
    dispatch(increase());
  }
  const dec = ()=>{
    dispatch(decrease());
  }

  return (
      <div>
        <div>{num}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
  )


}