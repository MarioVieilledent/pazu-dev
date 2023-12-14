import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

export interface Resizable {
  orientation: "horizontal" | "vertical";
  left: React.ReactNode;
  right: React.ReactNode;
  defaultWidth?: number;
  grabWidth?: number;
}

export const Resizable = ({
  orientation,
  left,
  right,
  defaultWidth = 200,
  grabWidth = 8,
}: Resizable): JSX.Element => {
  const [currDivSize, setCurrDivSize] = useState<number>(defaultWidth);
  const [prevDivSize, setPrevDivSize] = useState<number>(0);
  const [mousePos, setMousePos] = useState<number>(0);

  document.addEventListener(
    "mouseup",
    () => document.removeEventListener("mousemove", resize, false),
    false,
  );

  const resize = (e: any): void => {
    const delta: number =
      orientation === "vertical" ? e.clientX - mousePos : e.clientY - mousePos;
    setCurrDivSize(prevDivSize + delta + grabWidth / 2);
  };

  const mouseDownResize = (e: any): void => {
    setMousePos(orientation === "vertical" ? e.offsetX : e.offsetY);
    setPrevDivSize(currDivSize);
    document.addEventListener("mousemove", resize, false);
  };

  return (
    <Flex
      w="100%"
      h="100%"
      direction={orientation === "vertical" ? "row" : "column"}
      flexGrow={1}
    >
      <Flex
        w={orientation === "vertical" ? `${currDivSize}px` : "100%"}
        h={orientation === "horizontal" ? `${currDivSize}px` : "100%"}
        direction={orientation === "vertical" ? "row" : "column"}
      >
        <Box
          w={orientation === "horizontal" ? "100%" : ""}
          h={orientation === "vertical" ? "100%" : ""}
          flexGrow={1}
        >
          {left}
        </Box>
        <Box
          w={orientation === "vertical" ? `${grabWidth}px` : "100%"}
          h={orientation === "horizontal" ? `${grabWidth}px` : "100%"}
          cursor={orientation === "vertical" ? "ew-resize" : "ns-resize"}
          bgColor="grey"
          onMouseDown={mouseDownResize}
        ></Box>
      </Flex>
      <Flex
        w={
          orientation === "vertical" ? `calc(100% - ${currDivSize}px)` : "100%"
        }
        h={
          orientation === "horizontal"
            ? `calc(100% - ${currDivSize}px)`
            : "100%"
        }
      >
        {right}
      </Flex>
    </Flex>
  );
};
