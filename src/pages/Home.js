import React from "react";
import Header from "../components/Header/index";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <>
      <Header />
      <div>
        <Typography variant="h3">Home Page</Typography>
        <Button>Press me</Button>
      </div>
    </>
  );
}

export default Home;
