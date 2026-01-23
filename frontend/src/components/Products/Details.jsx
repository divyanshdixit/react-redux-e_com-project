import {
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import { AddToCartButton, DetailsBox, ImageBox, PageWrapper, PriceTextDetails, ProductContainer, ProductImage } from "./styles";
import { useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../../redux/apiService/api";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const {token} = useSelector(state => state.auth);
  const {id} = useParams();
  const {data:product, isLoading, error} = useGetProductDetailQuery(id, {skip: !token});
  console.log(product)
  // mock product (replace later with API data)
  // const product = {
  //   id: "1",
  //   title: "iPhone 15",
  //   price: 79999,
  //   category: "mobiles",
  //   image: "https://placehold.co/500",
  //   description:
  //     "Apple iPhone 15 with advanced camera system, powerful A16 chip, and premium design.",
  // };

  return (
    <PageWrapper>
      <ProductContainer>
        {/* LEFT: Image */}
        <ImageBox>
          <ProductImage src={product?.image} alt={product?.title} />
        </ImageBox>

        {/* RIGHT: Details */}
        <DetailsBox>
          <Typography variant="h4" fontWeight={600}>
            {product?.title}
          </Typography>

          <Chip
            label={product?.category}
            color="secondary"
            sx={{ width: "fit-content", mt: 1 }}
          />

          <PriceTextDetails variant="h5">
            ₹ {product?.price.toLocaleString()}
          </PriceTextDetails>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1" color="text.secondary">
            {product?.description}
          </Typography>

          <AddToCartButton
            variant="contained"
            color="primary"
            fullWidth
          >
            Add to Cart
          </AddToCartButton>
        </DetailsBox>
      </ProductContainer>
    </PageWrapper>
  );
};

export default ProductDetails;
