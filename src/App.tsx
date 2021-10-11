import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { Box, Flex, Container, Link as ChakraLink } from "@chakra-ui/react";

import { CITIES } from "utils/constants";
import CityWeather from "./views/CityWeather";

function App() {
  return (
    <Router>
      <Box>
        <Container maxW="container.md" py="10">
          <Flex w="full" justifyContent="space-evenly">
            {CITIES.map((city: string) => (
              <ChakraLink
                as={NavLink}
                key={city}
                to={`/city/${city}`}
                fontSize="4xl"
                activeStyle={{ fontWeight: "bold",color:'#5FB0E8' }}
                textTransform="uppercase"
              >
                {city}
              </ChakraLink>
            ))}

          </Flex>

          <Switch>
            <Route path="/city/:name">
              <CityWeather />
            </Route>
            <Route path="/">
              <Redirect
                to={{
                  pathname: "/city/ottawa",
                }}
              />
            </Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
