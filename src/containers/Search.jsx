import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardRutine } from '../components/CardRutine';
import { CarouselApp } from '../components/Carouse';
import { NavBar } from '../components/NavBar';
import { listArticleBuySync } from '../redux/actiones/actionArticleBuy';
import { listRutineaAsync } from '../redux/actiones/actionRutine';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);



export const Search2 = () => {
  
    const { products} = useSelector(store => store.productsStore)
        const dispatch=useDispatch()
        // useEffect(() => {
        //     dispatch(listArticleBuySync())
        // }, [dispatch]) 
    const onSearch = (value) => {
        
        console.log(value)
        value = value.toLocaleLowerCase()
        const data= products.filter(r => r.title.toLocaleLowerCase().includes(value))
        
        sessionStorage.setItem("dataProducts",JSON.stringify(data))
    }
    const data =JSON.parse(sessionStorage.getItem("dataProducts"))
   
    
    return(
        <div>
        <NavBar/>
        <CarouselApp/>
  <Space direction="vertical">
    
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    {
        data.map((f, idx) => (
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
   
  </Space>
  </div>
)

}