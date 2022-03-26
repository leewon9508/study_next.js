import {UserHistory} from "/src/data/user";

const USERHISTORY = "userHistory/USERHISTORY";
export const userHistory = (id) => ({type: USERHISTORY, id});
const userHis = [...UserHistory];

export default function login(state = userHis, action) {

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