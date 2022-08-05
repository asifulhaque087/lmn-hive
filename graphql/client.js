import { ApolloClient, InMemoryCache } from "@apollo/client";
import cache from "./cache";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache,
});

export default client;
