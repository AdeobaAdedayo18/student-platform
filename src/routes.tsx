import { createBrowserRouter } from "react-router-dom";
import CourseDetailStudent from "./pages/CourseDetailStudent";
import CourseDetailTeacher from "./pages/CourseDetailTeacher";
import CreateAssignmentPage from "./pages/CreateAssignmentPage";
import Dashboard from "./pages/DashBoard";
import ForgotPassword from "./pages/ForgotPassword";
import App from "./pages/HomePage";
import LogIn from "./pages/LogInPage";
import ManageStudents from "./pages/ManageStudents";
import SignUp from "./pages/SignUpPage";
import StudentAssignmentPage from "./pages/StudentAssignmentPage";
import StudentDashboard from "./pages/StudentDashboard";
import StudentDashboardb from "./pages/StudentDashboardb";
import TeacherDashboard from "./pages/TeacherDashboard";
import AssignmentResultsPage from "./pages/AssignmentResultsPage";
import StudentDashboardc from "./pages/StudentDashboardc";
import ManagerDashboard from "./pages/ManagerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/login", element: <LogIn></LogIn> },
  { path: "/signup", element: <SignUp></SignUp> },
  { path: "/dashboard", element: <Dashboard></Dashboard> },
  { path: "/manager", element: <ManagerDashboard /> },
  { path: "/admin", element: <AdminDashboard /> },
  {
    path: "/student-dashboardb",
    element: <StudentDashboardb></StudentDashboardb>,
  },
  {
    path: "/student-dashboard",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    path: "/student-dashboardc",
    element: <StudentDashboardc></StudentDashboardc>,
  },
  { path: "/forgot-password", element: <ForgotPassword></ForgotPassword> },
  {
    path: "/teacher-dashboard",
    element: <TeacherDashboard></TeacherDashboard>,
  },
  {
    path: "/student-course",
    element: <CourseDetailStudent></CourseDetailStudent>,
  },
  {
    path: "/teacher-course",
    element: <CourseDetailTeacher></CourseDetailTeacher>,
  },
  {
    path: "/student-assignment",
    element: <StudentAssignmentPage></StudentAssignmentPage>,
  },
  {
    path: "/teacher-assignment",
    element: <CreateAssignmentPage></CreateAssignmentPage>,
  },
  {
    path: "/manage-student",
    element: <ManageStudents></ManageStudents>,
  },
  {
    path: "/teacher/assignment/:assignmentId/results",
    element: <AssignmentResultsPage></AssignmentResultsPage>,
  },
]);

export default router;
