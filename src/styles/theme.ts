import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { extendTheme, ButtonProps } from '@chakra-ui/react'

const Text: ComponentStyleConfig = {
    baseStyle: {
        fontFamily: 'Hiragino Sans',
        fontWeight: 400,
        lineHeight: '150%',
        fontSize: '16px'
    }
}

const Button: ComponentStyleConfig = {
  variants: {
    solid: (props) => ({
      bg: props.disabled ? 'red.300' : 'tomato',
      _focus: {
        boxShadow: 'none'
      }
    })
  }
}


export const theme = extendTheme({
    components: {
      Text,
      Button
    },
  })