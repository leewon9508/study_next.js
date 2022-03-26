import {Menu} from 'semantic-ui-react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Axios from 'axios'

export default function Gnb() {
  const router = useRouter()
  let activeItem = "";

  if (router.pathname === '/') {
    activeItem = "home"
  } else if (router.pathname === '/about') {
    activeItem = "about"
  } else if (router.pathname === '/member') {
    activeItem = "member"
  }

  function goLink(e, data) {
    if (data.name === 'home') {
      router.push('/')
    } else if (data.name === 'about') {
      router.push('/about')
    } else if (data.name === 'member') {
      checkLogin();
    }
  }

  function checkLogin() {
    var check = localStorage.getItem("id");
    console.log(check);
    if (check) {
      router.push("/memberView")
    } else {
      router.push("/login")
    }

  }

  // function checkLogin() {
  //   Axios.get("/api/isLogin").then(res => {
  //     console.log('res.status ===>', res.status);
  //     console.log('res ===>', res);
  //     if (res.status === 200 && res.data.name) {
  //       // 로그인
  //       router.push("/memberView");
  //     } else {
  //       // 비로그인
  //       router.push("/login");
  //     }
  //   })
  // }

  return (
      <Menu inverted>
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={goLink}
        />
        <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={goLink}
        />
        <Menu.Item
            name='member'
            active={activeItem === 'member'}
            onClick={goLink}
        />
      </Menu>
  )
}