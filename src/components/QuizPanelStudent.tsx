import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const quizzes = [
  { id: 1, title: "Python Basics Quiz", timeLimit: 60, courseId: 1 },
  { id: 2, title: "JavaScript Fundamentals", timeLimit: 45, courseId: 2 },
  { id: 2, title: "JavaScript Fundamentals", timeLimit: 45, courseId: 2 },
  { id: 2, title: "JavaScript Fundamentals", timeLimit: 45, courseId: 2 },
  { id: 2, title: "JavaScript Fundamentals", timeLimit: 45, courseId: 2 },
  { id: 2, title: "JavaScript Fundamentals", timeLimit: 45, courseId: 2 },
  { id: 2, title: "JavaScript Fundamentals", timeLimit: 45, courseId: 2 },
];

const QuizPanelStudent = () => {
  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={4}
        width={{ base: "", md: "100%" }}
      >
        {quizzes.map((quiz) => (
          <Card key={quiz.id} bg={cardBgColor} shadow="lg" borderRadius="md">
            <CardHeader>
              <Heading size="md" color={headingColor}>
                {quiz.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>Time Limit: {quiz.timeLimit} minutes</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="orange">Start Quiz</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default QuizPanelStudent;
