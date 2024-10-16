import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Playground = () => {
  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const playgroundBg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Card bg={cardBgColor} shadow="lg" borderRadius="md">
        <CardHeader>
          <Heading size="md" color={headingColor}>
            Code Playground
          </Heading>
        </CardHeader>
        <CardBody>
          <Box bg={playgroundBg} p={4} borderRadius="md" mb={4}>
            <pre>
              <code>
                {`// Write your code here
function helloWorld() {
  console.log("Hello, World!");
}

helloWorld();`}
              </code>
            </pre>
          </Box>
          <HStack>
            <Button colorScheme="teal">Run Code</Button>
            <Button variant="outline">Clear</Button>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default Playground;
