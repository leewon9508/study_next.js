import {Button, Form, Header} from 'semantic-ui-react'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {userHistory} from '../src/modules/testRedux'

export default function Login() {
  const user = useSelector(state => {
    return state.login;
  })
  const dispatch = useDispatch();
  const router = useRouter();

  let [info, setInfo] = useState({id: "", pw: ""});
  async function loginBtn() {
    const id = info.id;
    dispatch(userHistory(id));
    const api = await Axios.post('/api/login', info)
        .then(res => {
          if (res.status === 200) {
            // 로그인 성공
            debugger;
            localStorage.setItem("id",info.id);
            router.push('/memberView');
          }
        })
  }
console.log(user);

  return (
      <div style={{padding: "100px 40%", textAlign: "center"}}>
        <Header as={'h2'}>로그인</Header>
        <Form>
          <Form.Field inine>
            <input type="text" placeholder={"ID"} onChange={(e) => {
              setInfo(prev => ({...prev, id: e.target.value}))
            }}/>
          </Form.Field>
          <Form.Field inine>
            <input type="password" placeholder={"Password"} onChange={(e) => {
              setInfo(prev => ({...prev, pw: e.target.value}))
            }}/>
          </Form.Field>
          <Button color={'blue'} onClick={loginBtn}>로그인</Button>
        </Form>


      </div>
  )
}