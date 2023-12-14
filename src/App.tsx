import { Box, Flex } from "@chakra-ui/react";
import { Resizable } from "./utils/Resizable";
const border = "1px solid black";

function App() {
  return (
    <Flex direction="column" w="100%" h="100%">
      <Flex w="100%" h="50px" borderBottom={border}>
        header
      </Flex>
      <Resizable
        orientation="horizontal"
        left={<Box>Nav</Box>}
        right={<Box>Content</Box>}
      />
    </Flex>
  );
}

export default App;
