import { ApolloClient } from "@apollo/client";
import cache from "./cache";

const client = new ApolloClient({
  uri: "https://api.react-finland.fi/graphql",
  // uri: "https://countries.trevorblades.com",
  cache,
  // cache: new InMemoryCache(),
});

export default client;
