import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    _: Boolean
    getDefaultTasks: [Task]!
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }

  type Task {
    id: ID!
    title: String!
    status: String!
  }
`;

export default typeDefs;
