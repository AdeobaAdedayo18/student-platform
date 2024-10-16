import { AddIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const assignmentsSet = [
  {
    id: 1,
    title: "JavaScript Closures",
    dueDate: "2024-10-15",
    submitted: 25,
    totalStudents: 40,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
  {
    id: 2,
    title: "React Component Lifecycle",
    dueDate: "2024-10-20",
    submitted: 30,
    totalStudents: 35,
  },
];
const AssignmentPanelTeacher = () => {
  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const navigate = useNavigate();
  const handleViewResults = (assignmentId: number) => {
    navigate(`/teacher/assignment/${assignmentId}/results`);
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading size="md">Assessments</Heading>
        <Button leftIcon={<AddIcon />} colorScheme="purple">
          Create Assessment
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {assignmentsSet.map((assignment) => (
          <Card
            key={assignment.id}
            bg={cardBgColor}
            shadow="lg"
            borderRadius="md"
          >
            <CardHeader>
              <Heading size="md" color={headingColor}>
                {assignment.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>Due: {assignment.dueDate}</Text>
              <Text>
                Submitted: {assignment.submitted} / {assignment.totalStudents}
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                colorScheme="blue"
                onClick={() => handleViewResults(assignment.id)}
              >
                View Results
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AssignmentPanelTeacher;
