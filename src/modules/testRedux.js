import {UserHistory} from "/src/data/user";

const INCREASE = "testRedux/INCREASE";
const DECREASE = "testRedux/DECREASE";
const USERHISTORY = "testRedux/USERHISTORY";

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});
export const userHistory = (id) => ({type: USERHISTORY,id});

const initialState = 0;
const userHis = [...UserHistory];

export function counter(state = initialState, action) {
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

export function login(state = userHis, action) {

  console.log('login');
  console.log(action.type)
  console.log(action.data)
  var time = new Date();
  time = time.toLocaleString();
  console.log(state)


  switch (action.type) {
    case USERHISTORY:

      let history = {id: action.id, time: time}
      // let hisCopy = state.concat(history)
      console.log(time);
     //console.log(hisCopy);
      console.log(history);

      return [
        ...state,
      {...history},
      ]
      ;
    default:
      console.log('default!')
      return state;
  }
}