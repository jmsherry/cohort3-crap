import React from "react";
import Header from "../components/Header/index";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function About() {
  return (
    <>
      <Header />
      <div>
        <Typography variant="h3">About Page</Typography>
        <Button>Press me</Button>
      </div>
    </>
  );
}

export default About;
