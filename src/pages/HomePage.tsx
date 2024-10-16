import { Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ColourModeSwitch from "../components/ColourModeSwitch";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <ColourModeSwitch></ColourModeSwitch>
      <Heading fontSize={"5xl"}>HOMEPAGE</Heading>
      <Button onClick={() => navigate("/signup")}>SIGN UP</Button>
      <Button onClick={() => navigate("/login")}>LOG IN</Button>
    </>
  );
}

export default App;
