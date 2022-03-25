import {Button, Header} from 'semantic-ui-react'
import styles from "/styles/Item.module.css"
import {useState} from 'react'

export default function Item({item}) {
  const {image_link, name, price, description, category, product_type} = item;

  return (
      <>
      <div className={styles.wrap}>
        <div className={styles.img}>
          <img src={image_link} alt={name}/>
        </div>
        <div className={styles.info}>
          <strong className={styles.name}>{name}</strong>
          <strong className={styles.price}>${price}</strong>
          <span className={styles.category}>{category ? `${category}` : ""}</span>
        <Button color={'orange'} className={styles.button}>구매하기</Button>
        </div>

      </div>
        <div className={styles.description}>
          <Header as={"h3"}>Description</Header>
          <p>{description}</p>
        </div>
      </>
  )
}