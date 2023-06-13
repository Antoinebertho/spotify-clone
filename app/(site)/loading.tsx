'use client'
import Box from '@/components/Box';
import { BounceLoader } from 'react-spinners';

const loading = () => {
  return (
    <Box className='flex h-full items-center justify-center'>
        <BounceLoader color='#22c55E' size={40} />
    </Box>
  )
}

export default loading