import React from 'react'
import Banner from './Banner'
import Card from './Card'
import { Box, Stack, Typography } from '@mui/material'
import Slider from '../../Components/Slider'

export default function Home() {
  return (
    <>
      <Banner/>
      <Card/>
      <Stack bgcolor={'#222831'} marginTop={16} color={'white'} display={'flex'} flexDirection={'row'} height={'500px'} justifyContent={'center'} alignItems={'center'} padding={'0 3%'} gap={6}>
        <Box display={'flex'} width={'820px'} flexDirection={'column'} justifyContent={'start'} height={'80%'} gap={2}>
          <Typography variant='h3'><span style={{fontWeight:'bold'}}>Healthy </span>  Food</Typography>
          <Typography variant='h2' color='#ff6600' fontWeight={'bold'}>01</Typography>
          <Typography variant='h5'>Easy to <span style={{fontWeight:'bold'}}> Use Tools</span></Typography>
          <Typography>Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Assumenda illo iusto, fuga esse nisi quibusdam. <br /> consectetur, adipisicing elit. Nam soluta error laudantium minima voluptatibus aliquam magnam dignissimos ipsam eveniet nobis!</Typography>
        </Box>
        <Box height={'80%'} width={'820px'}>
          <Typography marginBottom={7}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam earum dolore id, <br /> voluptates deleniti repellat voluptas natus ipsa repudiandae tempore similique quae, voluptatem architecto ea cupiditate, numquam dolorum voluptatum!</Typography>
          <Box display={'flex'} flexDirection={'column'} gap={2} >
            <Typography variant='h2' color='#ff6600' fontWeight={'bold'}>02</Typography>
            <Typography variant='h5'>Special <span style={{fontWeight:'bold'}}>Discount</span> </Typography>
            <Typography>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, nemo! sit amet consectetur, adipisicing elit. Nam soluta error laudantium minima voluptatibus aliquam magnam dignissimos ipsam eveniet nobis!</Typography>
          </Box>
        </Box>
      </Stack>
      <Slider/>
    </>
  )
}
