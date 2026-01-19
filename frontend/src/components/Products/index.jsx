import React from 'react'
import ProductCard from './ProductCard';
import { PageContainer, SectionTitle } from './styles';
import { Container, Grid } from '@mui/material';

const products = [
  {
    id: "1",
    title: "iPhone 15",
    price: 79999,
    category: "mobiles",
    image: "https://placehold.co/500",
    description: "Apple iPhone 15",
  },
  {
    id: "2",
    title: "MacBook Air",
    price: 119999,
    category: "laptops",
    image: "https://placehold.co/400",
    description: "Apple MacBook Air M2",
  },
  {
    id: "3",
    title: "Atomic Habits",
    price: 499,
    category: "books",
    image: "https://placehold.co/300",
    description: "Self improvement book",
  },
  {
    id: "3",
    title: "Zero to One",
    price: 499,
    category: "books",
    image: "https://placehold.co/200",
    description: "Self improvement book",
  },
  {
    id: "3",
    title: "Master your emotions",
    price: 499,
    category: "books",
    image: "https://placehold.co/100",
    description: "Self improvement book",
  },
];

const Products = () => {

  return (
    <PageContainer>
      <SectionTitle variant="h5">Products</SectionTitle> 

      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ marginTop: 1 }}>
          {(products || []).map(product => (
            <Grid item xs={12} sm={6} width="20%" key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageContainer>
  )
}

export default Products