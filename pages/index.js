import Head from 'next/head'
import Axios from 'axios'
import {useEffect, useState} from 'react'
import ItemList from '/src/component/ItemList'
import {Divider, Header} from 'semantic-ui-react'
import Loading from '../src/component/Loading'

export default function Home({list,name}) {
  console.log(list)
  console.log(name)
  //
  // // const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // console.log("home ==>", name);
  //
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  //
  // function getData() {
  //   Axios.get(API_URL)
  //       .then(res => {
  //         setList(res.data);
  //         setIsLoading(false);
  //       })
  // }
  //
  // useEffect(() => {
  //   getData();
  // }, [])

  return (
      <div>
        <Head>
          <title>HOME | 악마코딩</title>
          <mata name="description" content="코딩악마"/>
        </Head>

        <Header as="h1" style={{paddingTop: "40px", color: "green"}}>{name}</Header>

        <Header as="h3" style={{paddingTop: "1px"}}>베스트 상품</Header>
        <Divider/>
        <ItemList list={list.slice(0, 9)}/>
        {/*{*/}
        {/*  isLoading && true*/}
        {/*      ? <Loading/>*/}
        {/*      : <ItemList list={list.slice(0, 9)}/>*/}
        {/*}*/}

        <Header as="h3" style={{paddingTop: "40px"}}>신상품</Header>
        <Divider/>
        <ItemList list={list.slice(9)}/>
        {/*{*/}
        {/*  isLoading && true*/}
        {/*      ? <Loading/>*/}
        {/*      : <ItemList list={list.slice(9)}/>*/}
        {/*}*/}

      </div>
  )
}

export async function getServerSideProps(context) {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  const name = await process.env.name;
  return {
    props: {
      list: data,
      name: name
    }
  }
}