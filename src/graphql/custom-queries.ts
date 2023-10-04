import * as APITypes from '../API';
import { GetBasicUserQuery } from '../custom-api';

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBasicUser = /* GraphQL */ `query GetBasicUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    firstName
    lastName
    role
    awsSub
    createdAt
    updatedAt
    deletedAt
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, GetBasicUserQuery>;
