import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  useColorMode,
  useColorModeValue,
  Grid,
  GridItem,
  Progress,
  Flex,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import {
  FaBook,
  FaClipboard,
  FaGraduationCap,
  FaCalendarAlt,
  FaClock,
  FaMoon,
  FaSun,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseDetailStudent: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Mock data (to be replaced with actual data from API)
  const courseDetails = {
    title: "COS 121",
    instructor: "Jane Doe",
    description:
      "Learn the basics of C language  and build modern web applications and solutions.",
    progress: 60,
  };

  const assignments = [
    {
      id: 1,
      title: "React Components",
      dueDate: "2023-07-15",
      status: "Pending",
    },
    {
      id: 2,
      title: "State Management",
      dueDate: "2023-07-22",
      status: "Submitted",
    },
  ];

  const quizzes = [
    { id: 1, title: "React Basics Quiz", timeLimit: 30, score: null },
    { id: 2, title: "Components and Props", timeLimit: 20, score: 85 },
  ];

  return (
    <Box bg={bgColor} minH="100vh" p={6}>
      <Flex justify="space-between" align="center" mb={6}>
        <Button
          leftIcon={<FaArrowLeft />}
          onClick={() => navigate("/student-dashboard")}
        >
          Back to Dashboard
        </Button>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>

      <Grid templateColumns="1fr 300px" gap={6}>
        <GridItem>
          <VStack align="stretch" spacing={8}>
            <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
              <Flex justify="space-between" align="center">
                <VStack align="start" spacing={2}>
                  <Heading size="xl" color={textColor}>
                    {courseDetails.title}
                  </Heading>
                  <HStack>
                    <Avatar size="sm" name={courseDetails.instructor} />
                    <Text fontSize="lg">{courseDetails.instructor}</Text>
                  </HStack>
                </VStack>
                <Box textAlign="right">
                  <Text fontWeight="bold" mb={2}>
                    Course Progress
                  </Text>
                  <Progress
                    value={courseDetails.progress}
                    width="200px"
                    colorScheme="green"
                  />
                  <Text mt={1} fontSize="sm">
                    {courseDetails.progress}% Complete
                  </Text>
                </Box>
              </Flex>
              <Text mt={4}>{courseDetails.description}</Text>
            </Box>

            <Box>
              <Heading size="lg" mb={4}>
                Course Content
              </Heading>
              <VStack
                align="stretch"
                spacing={4}
                bg={cardBg}
                p={6}
                borderRadius="lg"
                boxShadow="md"
              >
                <HStack justify="space-between">
                  <HStack>
                    <Icon as={FaBook} color="green.500" />
                    <Text fontWeight="bold">
                      Module 1: Introduction to React
                    </Text>
                  </HStack>
                  <Badge colorScheme="green">Completed</Badge>
                </HStack>
                <HStack justify="space-between">
                  <HStack>
                    <Icon as={FaBook} color="blue.500" />
                    <Text fontWeight="bold">
                      Module 2: Components and Props
                    </Text>
                  </HStack>
                  <Badge colorScheme="blue">In Progress</Badge>
                </HStack>
                <HStack justify="space-between">
                  <HStack>
                    <Icon as={FaBook} color="gray.500" />
                    <Text fontWeight="bold">Module 3: State and Lifecycle</Text>
                  </HStack>
                  <Badge colorScheme="gray">Not Started</Badge>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading size="lg" mb={4}>
                Assignments
              </Heading>
              <Grid
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                gap={4}
              >
                {assignments.map((assignment) => (
                  <Box
                    key={assignment.id}
                    bg={cardBg}
                    p={4}
                    borderRadius="md"
                    boxShadow="sm"
                  >
                    <Heading size="md" mb={2}>
                      {assignment.title}
                    </Heading>
                    <HStack mb={2}>
                      <Icon as={FaCalendarAlt} color="red.500" />
                      <Text fontSize="sm">Due: {assignment.dueDate}</Text>
                    </HStack>
                    <Badge
                      colorScheme={
                        assignment.status === "Submitted" ? "green" : "yellow"
                      }
                    >
                      {assignment.status}
                    </Badge>
                  </Box>
                ))}
              </Grid>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="stretch" spacing={6} position="sticky" top="20px">
            <Box bg={cardBg} p={4} borderRadius="lg" boxShadow="md">
              <Heading size="md" mb={4}>
                Upcoming Quizzes
              </Heading>
              <VStack align="stretch" spacing={4}>
                {quizzes.map((quiz) => (
                  <Box
                    key={quiz.id}
                    p={3}
                    borderWidth={1}
                    borderColor={borderColor}
                    borderRadius="md"
                  >
                    <Text fontWeight="bold">{quiz.title}</Text>
                    <HStack mt={2}>
                      <Icon as={FaClock} color="orange.500" />
                      <Text fontSize="sm">{quiz.timeLimit} minutes</Text>
                    </HStack>
                    {quiz.score !== null ? (
                      <Text mt={2} fontWeight="bold" color="green.500">
                        Score: {quiz.score}%
                      </Text>
                    ) : (
                      <Button size="sm" colorScheme="blue" mt={2}>
                        Start Quiz
                      </Button>
                    )}
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box bg={cardBg} p={4} borderRadius="lg" boxShadow="md">
              <Heading size="md" mb={4}>
                Quick Links
              </Heading>
              <VStack align="stretch" spacing={2}>
                <Button
                  leftIcon={<FaBook />}
                  variant="outline"
                  justifyContent="flex-start"
                >
                  Course Materials
                </Button>
                <Button
                  leftIcon={<FaClipboard />}
                  variant="outline"
                  justifyContent="flex-start"
                >
                  All Assignments
                </Button>
                <Button
                  leftIcon={<FaGraduationCap />}
                  variant="outline"
                  justifyContent="flex-start"
                >
                  Grade Book
                </Button>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CourseDetailStudent;
