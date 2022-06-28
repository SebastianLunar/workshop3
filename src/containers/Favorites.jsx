import { DeleteOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect } from 'react'
import { useSelector,useDispatch }  from 'react-redux'
import { actionDeleteArticleFavoriteSync, addInfoFavoriteSync, listArticleFavoriteSync } from '../redux/actiones/actionFavorites'

export const Favorites = () => {
   const dispatch=useDispatch()
   const valueTitle =sessionStorage.getItem("key")
   const {products} = useSelector(store => store.productsStore)
   const article=products.filter(info=>info.title==valueTitle)
  dispatch(addInfoFavoriteSync(article))
  const handleDelete = (title)=>{
    alert('vamos a eliminar', title)
    dispatch(actionDeleteArticleFavoriteSync (title))
}
useEffect(() => {
    dispatch(listArticleFavoriteSync())
    
}, [dispatch]) 
const {favorites}=useSelector(store=>store.favoritesStore)
  return (
    <div style={{textAlign:"center"}}>
        <h1 >Favorites</h1>
        {
        favorites.map((f, idx) => (
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
