import Button from "@material-ui/core/Button";
import HooksHome from "./hooks/index";
import * as React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>GraphQL Client</h1>
      <Button variant="contained" color="primary">
        Test
      </Button>
      <HooksHome />
    </div>
  );
};
export default App;
