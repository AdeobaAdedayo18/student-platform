import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  useColorModeValue,
  Text,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

const grades = [
  { id: 1, course: "Introduction to Python", studentScore: 10, totalScore: 15 },
  { id: 2, course: "Web Development Basics", studentScore: 5, totalScore: 15 },
  {
    id: 3,
    course: "Data Structures and Algorithms",
    studentScore: 12,
    totalScore: 15,
  },
  {
    id: 4,
    course: "Machine Learning Fundamentals",
    studentScore: 8,
    totalScore: 15,
  },
  {
    id: 5,
    course: "Database Management Systems",
    studentScore: 14,
    totalScore: 15,
  },
  {
    id: 6,
    course: "Software Engineering Principles",
    studentScore: 11,
    totalScore: 15,
  },
  { id: 7, course: "Mobile App Development", studentScore: 9, totalScore: 15 },
  { id: 8, course: "Cybersecurity Basics", studentScore: 13, totalScore: 15 },
];

const GradePanelStudent: React.FC = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const headerBgColor = useColorModeValue("purple.500", "purple.200");
  const headerTextColor = useColorModeValue("white", "gray.800");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCourse, setSelectedCourse] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const handleRevalidateClick = (courseId: number, courseName: string) => {
    setSelectedCourse({ id: courseId, name: courseName });
    onOpen();
  };

  const handleRevalidateConfirm = () => {
    if (selectedCourse) {
      // TODO: Implement actual revalidation logic here
      toast({
        title: "Revalidation Requested",
        description: `Revalidating grade for ${selectedCourse.name}`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    onClose();
  };

  return (
    <Flex direction={"column"} height={"100%"} width={"100%"}>
      <Box bg={bgColor} p={5} borderRadius="lg" boxShadow="md" width={"100%"}>
        <Heading
          size="lg"
          mb={6}
          color={useColorModeValue("purple.600", "purple.300")}
        >
          Your Grades
        </Heading>
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr bg={headerBgColor}>
                <Th color={headerTextColor}>Course</Th>
                <Th color={headerTextColor}>Score</Th>
                <Th color={headerTextColor}>Percentage</Th>
                <Th color={headerTextColor}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {grades.map((grade) => {
                const scorePercentage =
                  (grade.studentScore / grade.totalScore) * 100;
                const scoreColor =
                  scorePercentage >= 70
                    ? "green.500"
                    : scorePercentage >= 50
                    ? "yellow.500"
                    : "red.500";
                return (
                  <Tr
                    key={grade.id}
                    _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                  >
                    <Td fontWeight="medium" color={textColor}>
                      {grade.course}
                    </Td>
                    <Td>
                      <Text fontSize="lg" fontWeight="bold" color={textColor}>
                        {grade.studentScore} / {grade.totalScore}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontWeight="bold" color={scoreColor}>
                        {Math.round(scorePercentage)}%
                      </Text>
                    </Td>
                    <Td>
                      <Button
                        size="sm"
                        leftIcon={<RepeatIcon />}
                        colorScheme="blue"
                        onClick={() =>
                          handleRevalidateClick(grade.id, grade.course)
                        }
                      >
                        Revalidate
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
        {/* Confirmation Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Revalidation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Are you sure you want to revalidate your grade for{" "}
              <Text fontWeight={"900"}>{selectedCourse?.name}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleRevalidateConfirm}
              >
                Yes, Revalidate
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default GradePanelStudent;
