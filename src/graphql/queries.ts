/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContest = /* GraphQL */ `query GetContest($id: ID!) {
  getContest(id: $id) {
    id
    rivalryId
    tierSlotAId
    tierSlotBId
    result
    bias
    createdAt
    updatedAt
    deletedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContestQueryVariables,
  APITypes.GetContestQuery
>;
export const listContests = /* GraphQL */ `query ListContests(
  $filter: ModelContestFilterInput
  $limit: Int
  $nextToken: String
) {
  listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rivalryId
      tierSlotAId
      tierSlotBId
      result
      bias
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContestsQueryVariables,
  APITypes.ListContestsQuery
>;
export const getFighter = /* GraphQL */ `query GetFighter($id: ID!) {
  getFighter(id: $id) {
    id
    name
    gameId
    gamePosition
    createdAt
    updatedAt
    tierSlots {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFighterQueryVariables,
  APITypes.GetFighterQuery
>;
export const listFighters = /* GraphQL */ `query ListFighters(
  $filter: ModelFighterFilterInput
  $limit: Int
  $nextToken: String
) {
  listFighters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      gameId
      gamePosition
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFightersQueryVariables,
  APITypes.ListFightersQuery
>;
export const getGame = /* GraphQL */ `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    name
    createdAt
    updatedAt
    deletedAt
    fighters {
      nextToken
      __typename
    }
    rivalries {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGameQueryVariables, APITypes.GetGameQuery>;
export const listGames = /* GraphQL */ `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGamesQueryVariables, APITypes.ListGamesQuery>;
export const getRivalry = /* GraphQL */ `query GetRivalry($id: ID!) {
  getRivalry(id: $id) {
    id
    userAId
    userBId
    gameId
    createdAt
    updatedAt
    deletedAt
    contests {
      nextToken
      __typename
    }
    tierLists {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRivalryQueryVariables,
  APITypes.GetRivalryQuery
>;
export const listRivalries = /* GraphQL */ `query ListRivalries(
  $filter: ModelRivalryFilterInput
  $limit: Int
  $nextToken: String
) {
  listRivalries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userAId
      userBId
      gameId
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRivalriesQueryVariables,
  APITypes.ListRivalriesQuery
>;
export const getTierList = /* GraphQL */ `query GetTierList($id: ID!) {
  getTierList(id: $id) {
    id
    rivalryId
    userId
    standing
    createdAt
    updatedAt
    deletedAt
    tierSlots {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTierListQueryVariables,
  APITypes.GetTierListQuery
>;
export const listTierLists = /* GraphQL */ `query ListTierLists(
  $filter: ModelTierListFilterInput
  $limit: Int
  $nextToken: String
) {
  listTierLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rivalryId
      userId
      standing
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTierListsQueryVariables,
  APITypes.ListTierListsQuery
>;
export const getTierSlot = /* GraphQL */ `query GetTierSlot($id: ID!) {
  getTierSlot(id: $id) {
    id
    tierListId
    fighterId
    position
    createdAt
    updatedAt
    deletedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTierSlotQueryVariables,
  APITypes.GetTierSlotQuery
>;
export const listTierSlots = /* GraphQL */ `query ListTierSlots(
  $filter: ModelTierSlotFilterInput
  $limit: Int
  $nextToken: String
) {
  listTierSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tierListId
      fighterId
      position
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTierSlotsQueryVariables,
  APITypes.ListTierSlotsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
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
    rivalriesA {
      nextToken
      __typename
    }
    rivalriesB {
      nextToken
      __typename
    }
    tierLists {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $id: ID
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      email
      firstName
      lastName
      role
      awsSub
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const contestsByRivalryIdAndId = /* GraphQL */ `query ContestsByRivalryIdAndId(
  $rivalryId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelContestFilterInput
  $limit: Int
  $nextToken: String
) {
  contestsByRivalryIdAndId(
    rivalryId: $rivalryId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rivalryId
      tierSlotAId
      tierSlotBId
      result
      bias
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ContestsByRivalryIdAndIdQueryVariables,
  APITypes.ContestsByRivalryIdAndIdQuery
>;
export const contestsByTierSlotAIdAndId = /* GraphQL */ `query ContestsByTierSlotAIdAndId(
  $tierSlotAId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelContestFilterInput
  $limit: Int
  $nextToken: String
) {
  contestsByTierSlotAIdAndId(
    tierSlotAId: $tierSlotAId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rivalryId
      tierSlotAId
      tierSlotBId
      result
      bias
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ContestsByTierSlotAIdAndIdQueryVariables,
  APITypes.ContestsByTierSlotAIdAndIdQuery
>;
export const contestsByTierSlotBIdAndId = /* GraphQL */ `query ContestsByTierSlotBIdAndId(
  $tierSlotBId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelContestFilterInput
  $limit: Int
  $nextToken: String
) {
  contestsByTierSlotBIdAndId(
    tierSlotBId: $tierSlotBId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rivalryId
      tierSlotAId
      tierSlotBId
      result
      bias
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ContestsByTierSlotBIdAndIdQueryVariables,
  APITypes.ContestsByTierSlotBIdAndIdQuery
>;
export const fightersByGameIdAndId = /* GraphQL */ `query FightersByGameIdAndId(
  $gameId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFighterFilterInput
  $limit: Int
  $nextToken: String
) {
  fightersByGameIdAndId(
    gameId: $gameId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      gameId
      gamePosition
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FightersByGameIdAndIdQueryVariables,
  APITypes.FightersByGameIdAndIdQuery
>;
export const rivalriesByUserAIdAndId = /* GraphQL */ `query RivalriesByUserAIdAndId(
  $userAId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRivalryFilterInput
  $limit: Int
  $nextToken: String
) {
  rivalriesByUserAIdAndId(
    userAId: $userAId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userAId
      userBId
      gameId
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RivalriesByUserAIdAndIdQueryVariables,
  APITypes.RivalriesByUserAIdAndIdQuery
>;
export const rivalriesByUserBIdAndId = /* GraphQL */ `query RivalriesByUserBIdAndId(
  $userBId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRivalryFilterInput
  $limit: Int
  $nextToken: String
) {
  rivalriesByUserBIdAndId(
    userBId: $userBId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userAId
      userBId
      gameId
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RivalriesByUserBIdAndIdQueryVariables,
  APITypes.RivalriesByUserBIdAndIdQuery
>;
export const rivalriesByGameIdAndId = /* GraphQL */ `query RivalriesByGameIdAndId(
  $gameId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRivalryFilterInput
  $limit: Int
  $nextToken: String
) {
  rivalriesByGameIdAndId(
    gameId: $gameId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userAId
      userBId
      gameId
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RivalriesByGameIdAndIdQueryVariables,
  APITypes.RivalriesByGameIdAndIdQuery
>;
export const tierListsByRivalryIdAndId = /* GraphQL */ `query TierListsByRivalryIdAndId(
  $rivalryId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTierListFilterInput
  $limit: Int
  $nextToken: String
) {
  tierListsByRivalryIdAndId(
    rivalryId: $rivalryId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rivalryId
      userId
      standing
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TierListsByRivalryIdAndIdQueryVariables,
  APITypes.TierListsByRivalryIdAndIdQuery
>;
export const tierListsByUserIdAndId = /* GraphQL */ `query TierListsByUserIdAndId(
  $userId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTierListFilterInput
  $limit: Int
  $nextToken: String
) {
  tierListsByUserIdAndId(
    userId: $userId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rivalryId
      userId
      standing
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TierListsByUserIdAndIdQueryVariables,
  APITypes.TierListsByUserIdAndIdQuery
>;
export const tierSlotsByTierListIdAndId = /* GraphQL */ `query TierSlotsByTierListIdAndId(
  $tierListId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTierSlotFilterInput
  $limit: Int
  $nextToken: String
) {
  tierSlotsByTierListIdAndId(
    tierListId: $tierListId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tierListId
      fighterId
      position
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TierSlotsByTierListIdAndIdQueryVariables,
  APITypes.TierSlotsByTierListIdAndIdQuery
>;
export const tierSlotsByFighterIdAndId = /* GraphQL */ `query TierSlotsByFighterIdAndId(
  $fighterId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTierSlotFilterInput
  $limit: Int
  $nextToken: String
) {
  tierSlotsByFighterIdAndId(
    fighterId: $fighterId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tierListId
      fighterId
      position
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TierSlotsByFighterIdAndIdQueryVariables,
  APITypes.TierSlotsByFighterIdAndIdQuery
>;
export const usersByAwsSub = /* GraphQL */ `query UsersByAwsSub(
  $awsSub: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByAwsSub(
    awsSub: $awsSub
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      firstName
      lastName
      role
      awsSub
      createdAt
      updatedAt
      deletedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByAwsSubQueryVariables,
  APITypes.UsersByAwsSubQuery
>;
