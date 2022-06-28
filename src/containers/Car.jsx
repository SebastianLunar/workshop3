import { DeleteOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect } from 'react'
import { useSelector,useDispatch }  from 'react-redux'
import { actionDeleteArticleBuySync, addArticleBuySync, listArticleBuySync } from '../redux/actiones/actionArticleBuy'
import { actionDeleteArticleFavoriteSync, addInfoFavoriteSync } from '../redux/actiones/actionFavorites'

export const Car = () => {
   const dispatch=useDispatch()
   const valueTitle =sessionStorage.getItem("keyBuy")
   const {products} = useSelector(store => store.productsStore)
   const article=products.filter(info=>info.title==valueTitle)
  dispatch(addArticleBuySync(article))
  const handleDelete = (title)=>{
    alert('vamos a eliminar', title)
    dispatch(actionDeleteArticleBuySync (title))
}
const {articles}=useSelector(store=>store.articleBuyStore)

useEffect(() => {
    dispatch(listArticleBuySync(articles))
}, [dispatch]) 
  return (
    <div style={{textAlign:"center"}}>
        <h1 >Shopping Cart</h1>
        
        {
        articles.map((f, idx) => (
          <Card
              hoverable
              key={idx}
              style={{
                  width:"20vw",
                  height:"10vw"
              }}
              cover={<img alt="example" src={f.image} />}
          >   
              
              <h3>{f.title}</h3>
              <Button style={{marginLeft:"3px"}} type="primary" danger onClick={()=>{handleDelete(f.title)}}><DeleteOutlined /></Button>
          </Card>
        ))
            } 
       
    </div>
  )
}