import {Button, Card, Icon, Image} from 'semantic-ui-react'
import {useState} from 'react'
import Axios from 'axios'
import {useRouter} from 'next/router'

export default function MemberView() {

  const [isLogin, setIslogin] = useState(false);
  let router = useRouter();

  function logout() {
    console.log('로그아웃');
    Axios.get("/api/logout")
        .then((res) => {
          if (res.status === 200) {
            router.push("/")
          }
        })
  }

  return (
      <div style={{padding: "200px 40%"}}>

        <Card style={{textAlign: "center"}}>
          <Image src='img/angma.png' wrapped ui={false}/>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user'/>
              22 Friends
            </a>
          </Card.Content>
          <Button color={'orange'} onClick={logout}>로그 아웃</Button>
        </Card>
      </div>
  )
}