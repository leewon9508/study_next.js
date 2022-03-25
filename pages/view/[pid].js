import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import Item from '/src/component/Item'
import Loading from "/src/component/Loading"
import Head from 'next/head'

const Post = ({item}) => {
  // const {pid} = router.query

  // const [item, setItem] = useState({});
  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${pid}.json`;
  // const [isLoading, setIsLoading] = useState(true);

  // function getData() {
  //   Axios.get(API_URL)
  //       .then(res => {
  //         console.log(res.data)
  //          setItem(res.data)
  //         setIsLoading(false)
  //       })
  // }

  // useEffect(() => {
  //   if (pid && pid > 0) {
  //     getData();
  //   }
  // }, [pid])

  return (
      <div>
        <Head>
          <title>{item.name}</title>
          <mata name="description" content={item.description}/>
        </Head>

        {item && <Item item={item}/>}

        {/*{*/}
        {/*  isLoading && true*/}
        {/*    ? <Loading/>*/}
        {/*    : <Item item={item}/>*/}
        {/*}*/}
      </div>
  )
}

export default Post;

export async function getServerSideProps(context) {
  const pid = context.params.pid;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${pid}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data
    }
  }
}