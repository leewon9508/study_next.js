import {Grid, Image} from 'semantic-ui-react'
import styles from "/styles/ItemList.module.css";
import Link from 'next/link'

export default function ItemList({list}) {

  return (
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item, index) => {
            return (
                <>
                  <Grid.Column ket={index} className={styles.wrap}>
                    <Link href={`/detail/${item.id}`}>
                      <a>
                        <img src={item.image_link} alt={item.name} className={styles.img_item}/>
                        <strong className={styles.tit_item}>{item.name}</strong>
                        <span className={styles.txt_info}>{item.category} {item.product_type}</span>
                        <strong className={styles.num_price}>${item.price}</strong>
                      </a>
                    </Link>
                  </Grid.Column>
                </>
            )
          })}
        </Grid.Row>
      </Grid>
  )
}