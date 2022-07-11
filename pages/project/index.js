import { Container } from "@chakra-ui/react";

import Layout from "../../components/layout/Layout";
import Header from "../../components/sections/Header";
import Display from "../../components/sections/display/Display";
import { Interned, PastProjects, Projects } from "../../components/data/Card";
import Copyright from "../../components/sections/Copyright";

const ProjectPage = () => {
  return (
    <Layout bgImage={"url('./images/project-background.png')"}>
      <Header />
      <Container maxW={"container.xl"} align={"center"}>
        <Display header={"PROJECT"} card={Projects} />
        <Display header={"INTERNED"} card={Interned} />
        <Display header={"PAST PROJECTS"} card={PastProjects} />
        <Copyright />
      </Container>
    </Layout>
  );
};

export default ProjectPage;
