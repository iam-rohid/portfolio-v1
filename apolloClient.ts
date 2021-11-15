import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/ckvznm8ee449e01wdb97hdhcg/master",
  cache: new InMemoryCache(),
});
