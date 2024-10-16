import { AddIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  useColorModeValue,
  Button,
  CardFooter,
  Flex,
} from "@chakra-ui/react";

const gradesGiven = [
  {
    id: 1,
    assignment: "JavaScript Closures",
    course: "Advanced JavaScript",
    averageGrade: 75,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
  {
    id: 2,
    assignment: "React Component Lifecycle",
    course: "React & Redux",
    averageGrade: 82,
  },
];

const GradePanelTeacher = () => {
  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading size="md">Quiz</Heading>
        <Button leftIcon={<AddIcon />} colorScheme="purple">
          Create Quiz
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {gradesGiven.map((grade) => (
          <Card key={grade.id} bg={cardBgColor} shadow="lg" borderRadius="md">
            <CardHeader>
              <Heading size="md" color={headingColor}>
                {grade.assignment}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>Course: {grade.course}</Text>
              <Text>
                Average Grade:{" "}
                <Text
                  as="span"
                  color={grade.averageGrade >= 50 ? "green.500" : "red.500"}
                  fontWeight="bold"
                >
                  {grade.averageGrade}%
                </Text>
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View Results</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GradePanelTeacher;
