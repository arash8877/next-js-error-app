import { TextField, TextArea, Button } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-2xl space-y-4'>
        <TextField.Root placeholder="Title" radius='medium' />
        <TextArea placeholder="Description" radius='medium'/>
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage