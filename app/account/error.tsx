'use client';
import Box from '@/components/Box';

const error = () => {
  return (
    <Box className='flex h-full items-center justify-center'>
        <div className='text-neutral-400'>
            Quelque chose ne va pas
        </div>
    </Box>
  )
}

export default error

