import { Flex, Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Stack flex="1" alignItems={"center"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Stack>
      <Footer />
    </Flex>
  );
}

export default App;
