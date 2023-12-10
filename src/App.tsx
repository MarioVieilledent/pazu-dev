import { Flex, Text } from "@chakra-ui/react";
import { Test } from "./components/Test";

function App() {
  return (
    <Flex direction="column" w="100%" h="100%">
      <Text>Pazu.dev</Text>
      <Test />
    </Flex>
  );
}

export default App;
