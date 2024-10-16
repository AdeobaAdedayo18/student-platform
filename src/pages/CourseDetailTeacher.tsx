import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaMoon,
  FaPlus,
  FaSun,
  FaUserGraduate,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseDetailTeacher: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const {
    isOpen: isQuizModalOpen,
    onOpen: onQuizModalOpen,
    onClose: onQuizModalClose,
  } = useDisclosure();

  const [newQuiz, setNewQuiz] = useState({
    title: "",
    description: "",
    timeLimit: "",
  });

  // Mock data (to be replaced with actual API calls)
  const courseDetails = {
    title: "Advanced React Development",
    description:
      "Master advanced React concepts and build complex applications.",
    enrollmentCode: "REACT2023",
    studentsCount: 25,
    progress: 60,
  };

  const students = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      enrollmentDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      enrollmentDate: "2023-01-16",
    },
  ];

  const assessments = [
    {
      id: 1,
      title: "React Hooks Project",
      dueDate: "2023-07-30",
      submissionsCount: 15,
    },
    {
      id: 2,
      title: "State Management Essay",
      dueDate: "2023-08-15",
      submissionsCount: 10,
    },
  ];

  const quizzes = [
    { id: 1, title: "React Basics Quiz", timeLimit: 30, participants: 20 },
    { id: 2, title: "Advanced Concepts Quiz", timeLimit: 45, participants: 18 },
  ];

  const handleCreateQuiz = () => {
    // TODO: Implement API call to create a new quiz
    console.log("Creating new quiz:", newQuiz);
    onQuizModalClose();
  };

  return (
    <Box bg={bgColor} minH="100vh" p={6}>
      <Flex justify="space-between" align="center" mb={6}>
        <Button
          leftIcon={<FaArrowLeft />}
          onClick={() => navigate("/teacher-dashboard")}
        >
          Back to Dashboard
        </Button>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>

      <VStack spacing={8} align="stretch">
        <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
          <Flex justify="space-between" align="center">
            <VStack align="start" spacing={2}>
              <Heading size="xl" color={textColor}>
                {courseDetails.title}
              </Heading>
              <Text>{courseDetails.description}</Text>
            </VStack>
            <Box textAlign="right">
              <Badge mb={2}>
                Enrollment Code: {courseDetails.enrollmentCode}
              </Badge>
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
        </Box>

        <Box>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="lg">Students</Heading>
            <Button
              leftIcon={<FaUserGraduate />}
              onClick={() => navigate("/manage-student")}
            >
              Manage Students
            </Button>
          </Flex>
          <Box bg={cardBg} borderRadius="lg" overflow="hidden" boxShadow="md">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Enrollment Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {students.map((student) => (
                  <Tr key={student.id}>
                    <Td>{student.name}</Td>
                    <Td>{student.email}</Td>
                    <Td>{student.enrollmentDate}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>

        <Box>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="lg">Assessments</Heading>
            <Button
              leftIcon={<FaPlus />}
              onClick={() => navigate("/teacher-assignment")}
            >
              Create Assessment
            </Button>
          </Flex>
          <VStack align="stretch" spacing={4}>
            {assessments.map((assessment) => (
              <Box
                key={assessment.id}
                bg={cardBg}
                p={4}
                borderRadius="md"
                boxShadow="sm"
              >
                <Heading size="md" mb={2}>
                  {assessment.title}
                </Heading>
                <HStack mb={2}>
                  <Icon as={FaCalendarAlt} color="red.500" />
                  <Text fontSize="sm">Due: {assessment.dueDate}</Text>
                </HStack>
                <Text fontSize="sm">
                  Submissions: {assessment.submissionsCount}
                </Text>
                <Button size="sm" mt={2}>
                  View Details
                </Button>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="lg">Quizzes</Heading>
            <Button leftIcon={<FaPlus />} onClick={onQuizModalOpen}>
              Create Quiz
            </Button>
          </Flex>
          <VStack align="stretch" spacing={4}>
            {quizzes.map((quiz) => (
              <Box
                key={quiz.id}
                bg={cardBg}
                p={4}
                borderRadius="md"
                boxShadow="sm"
              >
                <Heading size="md" mb={2}>
                  {quiz.title}
                </Heading>
                <HStack mb={2}>
                  <Icon as={FaClock} color="orange.500" />
                  <Text fontSize="sm">{quiz.timeLimit} minutes</Text>
                </HStack>
                <Text fontSize="sm">Participants: {quiz.participants}</Text>
                <Button size="sm" mt={2}>
                  View Results
                </Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>

      {/* Quiz Creation Modal */}
      <Modal isOpen={isQuizModalOpen} onClose={onQuizModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Quiz</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={newQuiz.title}
                onChange={(e) =>
                  setNewQuiz({ ...newQuiz, title: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={newQuiz.description}
                onChange={(e) =>
                  setNewQuiz({ ...newQuiz, description: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Time Limit (minutes)</FormLabel>
              <Input
                type="number"
                value={newQuiz.timeLimit}
                onChange={(e) =>
                  setNewQuiz({ ...newQuiz, timeLimit: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateQuiz}>
              Create
            </Button>
            <Button variant="ghost" onClick={onQuizModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CourseDetailTeacher;
