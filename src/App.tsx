import { Flex, Textarea, Code, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";

const navHeight = "50px";
const sideBarWidth = "200px";

const codeExamples: { title: string; code: string }[] = [
  {
    title: "Clear",
    code: `// Code here

`,
  },
  {
    title: "Fibonacci",
    code: `const fibonacci = (n) =>
    n <= 0
      ? []
      : n === 1
        ? [1]
        : ((f) => (
            Array.from({ length: n - 2 }, (_, i) =>
              f.push(f[i] + f[i + 1])), f
          ))([1, 1]);
          
fibonacci(15);`,
  },
  { title: "12", code: `12` },
  { title: "Alert time", code: `alert(new Date());` },
  {
    title: "Fetch",
    code: `
async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  return movies;
}

logMovies();`,
  },
];

function App() {
  const [script, setScript] = useState("");
  const [result, setResult] = useState("");

  const write = (str: string): void => {
    setScript(str);

    try {
      const evaluated = eval(str);
      if (typeof evaluated === "string") {
        setResult(evaluated);
      } else if (typeof evaluated === "object") {
        setResult(JSON.stringify(evaluated, null, 4));
      } else {
        setResult(evaluated);
      }
    } catch (e) {}
  };

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      fontFamily="monospace"
      fontSize="12px"
    >
      <Flex h={navHeight}>
        <Heading ml="12px">JS interpretor</Heading>
      </Flex>
      <Flex flexGrow={1}>
        <Flex w={sideBarWidth} direction="column" p="12px" gap="12px">
          {codeExamples.map((codeExample, index) => (
            <Button key={index} onClick={() => write(codeExample.code)}>
              {codeExample.title}
            </Button>
          ))}
        </Flex>
        <Flex flexGrow={1}>
          <Textarea
            w="100%"
            h="100%"
            onChange={(event) => write(event.target.value)}
            value={script}
          />
        </Flex>
        <Flex flexGrow={1}>
          <Code w="100%" h="100%" whiteSpace="pre">
            {result}
          </Code>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
