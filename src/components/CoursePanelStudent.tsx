import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  useColorModeValue,
  HStack,
  Input,
  Image,
  VStack,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import imageSample from "../assets/START YOUR CODING JOURNEY TODAY (2).svg";

const CoursePanelStudent = () => {
  const [enrollmentCode, setEnrollmentCode] = useState("");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const btnBgColor = useColorModeValue("cyan.600", "cyan.400");

  const handleEnrollment = () => {
    console.log("Enrolling with code:", enrollmentCode);
    setEnrollmentCode("");
  };

  const courses = [
    {
      id: 1,
      name: "Introduction to Python",
      instructor: "Dr. Smith",
      enrollmentCode: "123456",
      image: "https://example.com/python-course-image.jpg",
      duration: "8 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    {
      id: 2,
      name: "Web Development Basics",
      instructor: "Prof. Johnson",
      enrollmentCode: "789012",
      image: "https://example.com/web-dev-course-image.jpg",
      duration: "10 weeks",
    },
    // ... other courses
  ];

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {courses.map((course) => (
          <Card
            key={course.id}
            bg={cardBgColor}
            shadow="lg"
            borderRadius="md"
            overflow="hidden"
          >
            {/* the actual one you use for the cards when ready to link to backend */}
            {/* <Image
              src={course.image}
              alt={course.name}
              objectFit="cover"
              height="200px"
            /> */}
            <Image
              src={imageSample}
              alt={course.name}
              objectFit="cover"
              height="200px"
            />

            <CardBody>
              <VStack align="start" spacing={2}>
                <Heading size="md" color={headingColor}>
                  {course.name}
                </Heading>
                <Text fontSize="sm" color="gray.500" fontWeight={"700"}>
                  Instructor: {course.instructor}
                </Text>
                <HStack spacing={4}>
                  <Box
                    bg={useColorModeValue("gray.100", "#bee3f8")}
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    <Text
                      fontSize="xs"
                      color={useColorModeValue("", "gray.800")}
                    >
                      {course.duration}
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </CardBody>
            <CardFooter>
              <Button colorScheme="purple" width="100%">
                View Course
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <Card mt={6} bg={cardBgColor} shadow="lg">
        <CardHeader>
          <Heading size="md" color={headingColor}>
            Enroll in a New Course
          </Heading>
        </CardHeader>
        <CardBody>
          <HStack>
            <Input
              placeholder="Enter enrollment code"
              value={enrollmentCode}
              onChange={(e) => setEnrollmentCode(e.target.value)}
            />
            <Button bg={btnBgColor} color="white" onClick={handleEnrollment}>
              Enroll
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default CoursePanelStudent;
