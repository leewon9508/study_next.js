import {Divider, List, Header, Form,Button} from 'semantic-ui-react'

export default function About() {

  return (
      <div>

        <Header as={"h3"} style={{paddingTop: "40px", color: "green", fontSize: "30px"}}>
          회사소개
        </Header>
        <Divider/>
        <List>
          <List.Item icon='users' content='Semantic UI'/>
          <List.Item icon='marker' content='New York, NY'/>
          <List.Item
              icon='mail'
              content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
          />
          <List.Item
              icon='linkify'
              content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
          />
        </List>

        <Header as={"h3"} style={{paddingTop: "40px", color: "green", fontSize: "30px"}}>
          문의사항
        </Header>
        <Divider/>
        <Form>
          <Form.Field>
            <label>제목</label>
            <input placeholder='제목' />
          </Form.Field>
          <Form.Field>
            <label>내용</label>
            <input placeholder='내용' />
          </Form.Field>
          <Button type='submit' color={"blue"}>보내기</Button>
        </Form>
      </div>
  )
}