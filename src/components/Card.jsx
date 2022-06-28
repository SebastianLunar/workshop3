import {
  CardButton,
  CardDiv,
  CardsGrid,
  CardText,
  DivButton,
} from "../styles/CardStyles";
import location from "../assets/images/location.svg";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { productListAsync } from "../redux/actions/productActions";

export const Card = () => {
  const { products } = useSelector((state) => state.productsStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productListAsync());
  }, []);

  return (
    <CardsGrid>
      {products.map((product) => (
        <CardDiv key={product.title}>
          <img src={product.image} alt={product.title} />
          <CardText>
            <h3>{product.price} $</h3>
            <span className="title">
              {product.title}
              <span>
                <img src={location} />
                45 km
              </span>
            </span>
            <DivButton>
              <CardButton
                onClick={() => {
                  sessionStorage.setItem("key", product.title);
                }}
              >
                <HeartOutlined />
              </CardButton>
              <CardButton
                onClick={() => {
                  sessionStorage.setItem("keyBuy", product.title);
                }}
              >
                <ShoppingCartOutlined />
              </CardButton>
            </DivButton>
          </CardText>
        </CardDiv>
      ))}
    </CardsGrid>
  );
};
