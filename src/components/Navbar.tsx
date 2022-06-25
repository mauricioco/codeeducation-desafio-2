import { AppBar, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export const Navbar: FunctionComponent = () => {
  return (
    <AppBar position="sticky" >
      <Toolbar>
        <Typography variant="h6">CodeEducation Desafio 2</Typography>
      </Toolbar>
    </AppBar>
  );
};