import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as React from "react";

const App = () => {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            GraphQL Client
          </Typography>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="primary">
        Test
      </Button>
    </div>
  );
};
export default App;
