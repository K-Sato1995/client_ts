import { ApolloProvider } from "react-apollo";
import App from "./App";
import { client } from "./middleware";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
