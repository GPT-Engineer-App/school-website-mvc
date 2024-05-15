import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Home = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Heading>Welcome to Our School</Heading>
      <Image src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZ3xlbnwwfHx8fDE3MTU3NTE4MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="School Building" />
      <Text>Our school is committed to providing quality education to all students.</Text>
    </VStack>
  </Container>
);

const About = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Heading>About Us</Heading>
      <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb218ZW58MHx8fHwxNzE1NzUxODIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Classroom" />
      <Text>We are a school dedicated to fostering a love for learning in our students.</Text>
    </VStack>
  </Container>
);

const Contact = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Heading>Contact Us</Heading>
      <Image src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzE1NzUxODIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Contact Us" />
      <Text>If you have any questions, feel free to reach out to us.</Text>
    </VStack>
  </Container>
);

const NavBar = () => (
  <HStack spacing={4} padding={4} bg="teal.500" color="white">
    <Button as={Link} to="/" leftIcon={<FaHome />}>
      Home
    </Button>
    <Button as={Link} to="/about" leftIcon={<FaInfoCircle />}>
      About
    </Button>
    <Button as={Link} to="/contact" leftIcon={<FaEnvelope />}>
      Contact
    </Button>
  </HStack>
);

const Index = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Index;
