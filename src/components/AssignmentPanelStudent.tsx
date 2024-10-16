import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Badge,
  CardFooter,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const assignments = [
  {
    id: 1,
    title: "Python Loops",
    dueDate: "2024-10-15",
    isOverdue: false,
    courseId: 1,
  },
  {
    id: 2,
    title: "HTML & CSS Project",
    dueDate: "2024-10-10",
    isOverdue: true,
    courseId: 2,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
  {
    id: 3,
    title: "React",
    dueDate: "2024-23-10",
    isOverdue: false,
    courseId: 3,
  },
];
const AssignmentPanelStudent = () => {
  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        width={{ base: "90%", md: "100%" }}
        spacing={4}
      >
        {assignments.map((assignment) => (
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
              <Badge colorScheme={assignment.isOverdue ? "red" : "green"}>
                {assignment.isOverdue ? "Overdue" : "Pending"}
              </Badge>
            </CardBody>
            <CardFooter>
              <Button colorScheme="green">Start Assignment</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AssignmentPanelStudent;
