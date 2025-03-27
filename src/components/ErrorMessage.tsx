import { Text } from '@radix-ui/themes'
import React, { PropsWithChildren } from 'react'

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null; // this is to avoid using {errors.title && <ErrorMessage> .......} in the JSX
  
  return (
    <Text color="red" as="p">{children}</Text>
  )
}

export default ErrorMessage