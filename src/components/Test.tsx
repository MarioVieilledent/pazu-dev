import { Stack, Text } from "@chakra-ui/react";

export const Test = (): JSX.Element => {
  return (
    <Stack spacing={3}>
      <Text fontSize="6xl">(6xl) Text</Text>
      <Text fontSize="5xl">(5xl) Text</Text>
      <Text fontSize="4xl">(4xl) Text</Text>
      <Text fontSize="3xl">(3xl) Text</Text>
      <Text fontSize="2xl">(2xl) Text</Text>
      <Text fontSize="xl">(xl) Text</Text>
      <Text fontSize="lg">(lg) Text</Text>
      <Text fontSize="md">(md) Text</Text>
      <Text fontSize="sm">(sm) Text</Text>
      <Text fontSize="xs">(xs) Text</Text>
    </Stack>
  );
};
