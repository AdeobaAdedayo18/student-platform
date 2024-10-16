import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useColorModeValue,
  Badge,
  Flex,
  Progress,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Mock data (replace with actual data fetching in the future)
const assignmentDetails = {
  title: "JavaScript Closures",
  description: "Implement and explain closures in JavaScript",
  dueDate: "2024-10-15",
  totalSubmissions: 25,
  totalStudents: 40,
};

const studentSubmissions = [
  { id: 1, name: "John Doe", submissionDate: "2024-10-14", score: 85 },
  { id: 2, name: "Jane Smith", submissionDate: "2024-10-15", score: 92 },
  { id: 3, name: "Alice Johnson", submissionDate: "2024-10-15", score: 78 },
  { id: 4, name: "Bob Brown", submissionDate: null, score: null },
];

const AssignmentResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  const submissionRate =
    (assignmentDetails.totalSubmissions / assignmentDetails.totalStudents) *
    100;

  return (
    <Box minHeight="100vh" bg={bgColor} p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Button leftIcon={<FaArrowLeft />} onClick={() => navigate(-1)}>
          Back to Assignments
        </Button>
      </Flex>

      <VStack spacing={8} align="stretch">
        <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="xl" color={textColor} mb={4}>
            {assignmentDetails.title}
          </Heading>
          <Text mb={2}>{assignmentDetails.description}</Text>
          <HStack spacing={4} mb={4}>
            <Badge colorScheme="blue">Due: {assignmentDetails.dueDate}</Badge>
            <Badge colorScheme="green">
              Submissions: {assignmentDetails.totalSubmissions} /{" "}
              {assignmentDetails.totalStudents}
            </Badge>
          </HStack>
          <Text mb={2}>Submission Rate:</Text>
          <Progress
            value={submissionRate}
            colorScheme="blue"
            hasStripe
            mb={2}
          />
          <Text>{submissionRate.toFixed(2)}%</Text>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
          <Heading size="lg" mb={4}>
            Student Submissions
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Submission Date</Th>
                <Th>Score</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {studentSubmissions.map((submission) => (
                <Tr
                  key={submission.id}
                  _hover={{ bg: hoverBg, transition: "background-color 0.2s" }}
                >
                  <Td>{submission.name}</Td>
                  <Td>{submission.submissionDate || "Not submitted"}</Td>
                  <Td>
                    {submission.score !== null ? `${submission.score}%` : "N/A"}
                  </Td>
                  <Td>
                    <Button size="sm" colorScheme="blue">
                      {submission.score !== null ? "Review" : "Grade"}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default AssignmentResultsPage;
