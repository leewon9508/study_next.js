const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";


export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// getState를 쓰지 않는다면 파라미터로 받아올 필요없음.
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

const initialState = 0;

export default function counter(state = initialState, action) {
  console.log('counter');
  console.log(action.type)
  switch (action.type) {
    case INCREASE:
      console.log('++++')
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

