import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Updated mock data for students
const mockStudents = [
  {
    id: "001",
    name: "John Doe",
    email: "john@example.com",
    enrollmentDate: "2023-01-15",
  },
  {
    id: "002",
    name: "Jane Smith",
    email: "jane@example.com",
    enrollmentDate: "2023-01-16",
  },
  {
    id: "003",
    name: "Alice Johnson",
    email: "alice@example.com",
    enrollmentDate: "2023-01-17",
  },
  {
    id: "004",
    name: "Bob Williams",
    email: "bob@example.com",
    enrollmentDate: "2023-01-18",
  },
];

const ManageStudents: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const [studentToRemove, setStudentToRemove] = useState<string | null>(null);

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  const handleViewGrades = (studentId: string) => {
    // TODO: Implement view grades functionality
    console.log(`View grades for student ${studentId}`);
    toast({
      title: "View Grades",
      description: `Viewing grades for student ${studentId}`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleRemoveStudent = (studentId: string) => {
    setStudentToRemove(studentId);
    onOpen();
  };

  const confirmRemoveStudent = () => {
    // TODO: Implement remove student functionality
    console.log(`Removing student ${studentToRemove}`);
    toast({
      title: "Student Removed",
      description: `Student ${studentToRemove} has been removed from the course`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
    setStudentToRemove(null);
  };

  return (
    <Box minHeight="100vh" bg={bgColor} p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Button leftIcon={<FaArrowLeft />} onClick={() => navigate(-1)}>
          Back to Course
        </Button>
      </Flex>

      <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
        <Heading size="xl" mb={6} color={textColor}>
          Manage Students
        </Heading>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Student ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Enrollment Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mockStudents.map((student) => (
              <Tr
                key={student.id}
                _hover={{ bg: hoverBg, transition: "background-color 0.2s" }}
              >
                <Td>{student.id}</Td>
                <Td>{student.name}</Td>
                <Td>{student.email}</Td>
                <Td>{student.enrollmentDate}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    mr={2}
                    onClick={() => handleViewGrades(student.id)}
                  >
                    View Grades
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleRemoveStudent(student.id)}
                  >
                    Remove
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove Student
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to remove this student from the course? This
              action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmRemoveStudent} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ManageStudents;
