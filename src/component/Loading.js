import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react'

export default function Loading() {


  return (
      <div style={{height:"500px", paddingTop:"25%"}}>
        <Loader inline="centered" active>
          Loading
        </Loader>
      </div>
  )
}