import React from 'react'
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import CartItem from "../../components/CartItem";


async function getProducts(){
  const res = await fetch('https://dummyjson.com/products' ,
          {next: {revalidate: 60}}
  )
  return res.json()
}



const ProductPage = async () => {

const data = await getProducts()
const products = data.products;
console.log(products);

  return (
   <section className="bg-white">
      <Container className='my-20'>


        <Flex className='flex-wrap gap-2'>
           {
           products.map((prdct) => (
          <CartItem  key={prdct.id}  data={prdct} /> ))
           }



        </Flex>
      </Container>
    </section>
  )
}

export default ProductPage







