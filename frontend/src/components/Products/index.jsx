import React from 'react'
import { PageContainer, SectionTitle } from './styles';
import { CircularProgress, Container, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useGetProductsQuery } from '../../redux/apiService/api';
import { useSelector } from 'react-redux';

const Products = () => {
  const {data: products, isLoading} = useGetProductsQuery(undefined, { refetchOnFocus: true});

  return (
    <PageContainer>
      <SectionTitle variant="h5">Products</SectionTitle> 

      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ marginTop: 1 }}>
          {isLoading ? <CircularProgress /> :
          ((products && products.length) ? products.map(product => (
            <Grid item xs={12} sm={6} width="20%" key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
          :
          "No products listed! Please come back again"
          )
        }
        </Grid>
      </Container>
    </PageContainer>
  )
}

export default Products