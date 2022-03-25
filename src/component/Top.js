import {Header} from 'semantic-ui-react'
import Gnb from "/src/component/Gnb"

export default function Top({name}) {
  return (
      <div>
        <div style={{display: "flex", paddingTop: "20px"}}>
          <div style={{flex: "100px 0 0"}}>
            <img src="/img/angma.png"
                 alt="logo"
                 style={{display: "block", width: 80}}/>
          </div>
          <Header as="h1">코딩악마</Header>
          <p>{name}</p>
        </div>
        <Gnb/>
      </div>
  )
}

