// pages/404.js
import {Icon} from 'semantic-ui-react'

export default function Error404() {
  return (
      <div style={{padding: "200px 0", textAlign: "center", fontSize: "20px"}}>
        <Icon name={"warning circle"} color={"red"}/>
        404 - 페이지를 찾을수가 없습니다...
      </div>

  )
}