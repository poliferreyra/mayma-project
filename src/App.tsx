import { Stack } from "@chakra-ui/react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <Stack>
      <Header />
      <Home />
      <Footer />
    </Stack>
  );
}

export default App;
