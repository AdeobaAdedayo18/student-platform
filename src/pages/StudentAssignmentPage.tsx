import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Badge,
  Textarea,
  Grid,
  GridItem,
  Flex,
  IconButton,
  Tooltip,
  Card,
} from "@chakra-ui/react";
import { FaPlay, FaClock, FaSave, FaQuestion, FaCode } from "react-icons/fa";

const StudentAssignmentPage = () => {
  const [code, setCode] = useState("// Write your code here");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Mock data (replace with actual data from API)
  const assignment = {
    title: "React Component Implementation",
    description: "Assigment 1",
    question: "Write a program that calculates the sum of 1 to 100 ",
    dueDate: "2023-12-31T23:59:59",
    timeRemaining: "5 days, 3 hours, 45 minutes",
    isOverdue: false,
  };

  const handleRunCode = () => {
    console.log("Running code:", code);
    // Implement code execution logic here
  };

  const handleSaveCode = () => {
    console.log("Saving code:", code);
    // Implement code saving logic here
  };

  return (
    <Box bg={bgColor} minH="100vh" p={6}>
      <VStack spacing={6} align="stretch">
        <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
          <Flex justifyContent="space-between" alignItems="center">
            <VStack align="start" spacing={2}>
              <Heading size="xl">{assignment.title}</Heading>
              <Text size={"md"}>{assignment.description}</Text>
              <HStack>
                <Badge colorScheme={assignment.isOverdue ? "red" : "green"}>
                  {assignment.isOverdue ? "Overdue" : "Open"}
                </Badge>
                <Text fontSize="sm" color="gray.500">
                  Due: {new Date(assignment.dueDate).toLocaleString()}
                </Text>
              </HStack>
            </VStack>
            <VStack align="end">
              <Text fontWeight="bold">Time Remaining:</Text>
              <Text>{assignment.timeRemaining}</Text>
            </VStack>
          </Flex>
        </Box>

        <Grid templateColumns="1fr 350px" gap={6}>
          <GridItem>
            <VStack spacing={4} align="stretch">
              <Box bg={cardBg} p={4} borderRadius="md" boxShadow="sm">
                <Heading size="md" mb={2}>
                  Code Editor
                </Heading>
                <Box
                  border="1px"
                  borderColor={borderColor}
                  borderRadius="md"
                  overflow="hidden"
                >
                  <Card height={"400px"} width={"100%"}></Card>
                </Box>
                <HStack mt={4} justifyContent="flex-end">
                  <Button
                    leftIcon={<FaPlay />}
                    colorScheme="green"
                    onClick={handleRunCode}
                  >
                    Run Code
                  </Button>
                  <Button
                    leftIcon={<FaSave />}
                    colorScheme="blue"
                    onClick={handleSaveCode}
                  >
                    Save Progress
                  </Button>
                </HStack>
              </Box>
              <Box bg={cardBg} p={4} borderRadius="md" boxShadow="sm">
                <Heading size="md" mb={2}>
                  Output
                </Heading>
                <Textarea
                  readOnly
                  value="// Code output will appear here"
                  height="150px"
                  bg={useColorModeValue("gray.100", "gray.600")}
                />
              </Box>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="stretch">
              <Box bg={cardBg} p={4} borderRadius="md" boxShadow="sm">
                <Heading size="md" mb={2}>
                  Assessment Question
                </Heading>
                <Text>{assignment.question}</Text>
              </Box>
              <Box bg={cardBg} p={4} borderRadius="md" boxShadow="sm">
                <Heading size="md" mb={2}>
                  Resources
                </Heading>
                <VStack align="stretch">
                  <Button leftIcon={<FaQuestion />} variant="outline">
                    View Instructions
                  </Button>
                  <Button leftIcon={<FaCode />} variant="outline">
                    Sample Code
                  </Button>
                </VStack>
              </Box>
              <Box bg={cardBg} p={4} borderRadius="md" boxShadow="sm">
                <Heading size="md" mb={2}>
                  Submission
                </Heading>
                <Button colorScheme="purple" width="full">
                  Submit Assignment
                </Button>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default StudentAssignmentPage;
