import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
  Select,
  HStack,
  Image,
} from "@chakra-ui/react";

// Define the schema for course creation
const courseSchema = z.object({
  title: z
    .string()
    .min(1, "Course title is required")
    .max(100, "Course title must be 100 characters or less"),
  description: z
    .string()
    .max(500, "Description must be 500 characters or less")
    .optional(),
  image: z.string().min(1, "Course image is required"),
});

// Infer the TypeScript type from the schema
export type CourseFormData = z.infer<typeof courseSchema>;

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateCourse: (courseData: CourseFormData) => void;
}

const defaultImages = [
  { value: "default1.jpg", label: "Default 1" },
  { value: "default2.jpg", label: "Default 2" },
  { value: "default3.jpg", label: "Default 3" },
];

const CreateCourseModal: React.FC<CreateCourseModalProps> = ({
  isOpen,
  onClose,
  onCreateCourse,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
  });

  const onSubmit = (data: CourseFormData) => {
    onCreateCourse(data);
    reset();
    setSelectedImage(null);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setValue("image", file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Course</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isInvalid={!!errors.title}>
                <FormLabel>Course Title</FormLabel>
                <Input
                  {...register("title")}
                  placeholder="Enter course title"
                />
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.description}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  {...register("description")}
                  placeholder="Enter course description"
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.image}>
                <FormLabel>Course Image</FormLabel>
                <HStack>
                  <Controller
                    name="image"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select {...field} placeholder="Select default image">
                        {defaultImages.map((img) => (
                          <option key={img.value} value={img.value}>
                            {img.label}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </HStack>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Selected course image"
                    maxHeight="200px"
                    mt={2}
                  />
                )}
                <FormErrorMessage>
                  {errors.image && errors.image.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              isLoading={isSubmitting}
            >
              Create Course
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateCourseModal;
