import React, { useState } from "react";
import {
  Flex,
  Heading,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";

// Define the schema for enrollment code
const enrollmentSchema = z.object({
  enrollmentCode: z
    .string()
    .min(1, "Enrollment code is required")
    .max(20, "Invalid enrollment code"),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

const StudentEnrollmentSection: React.FC = () => {
  const [isEnrolling, setIsEnrolling] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsEnrolling(true);
    try {
      // TODO: Implement API call to enroll in course
      console.log("Enrolling with code:", data.enrollmentCode);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Enrolled successfully",
        description: "You have been enrolled in the course.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      reset();
    } catch (error) {
      toast({
        title: "Enrollment failed",
        description: "Failed to enroll in the course. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" mb={5}>
      <Heading size="md">Enroll in Course</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex alignItems="center">
          <FormControl isInvalid={!!errors.enrollmentCode} mr={3}>
            <FormLabel htmlFor="enrollmentCode" srOnly>
              Enrollment Code
            </FormLabel>
            <Input
              id="enrollmentCode"
              placeholder="Enter enrollment code"
              {...register("enrollmentCode")}
            />
            <FormErrorMessage>
              {errors.enrollmentCode && errors.enrollmentCode.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            leftIcon={<FaSignInAlt />}
            colorScheme="green"
            type="submit"
            isLoading={isEnrolling}
          >
            Enroll
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default StudentEnrollmentSection;
