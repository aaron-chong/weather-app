import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    polar: "#EEF6FB",
    iceberg: "#98E6E6",
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles:{
    global:{
      body:{
        bg:'polar'
      },
      a:{
        textDecoration:'none !important'
      }
    }
  }
});
