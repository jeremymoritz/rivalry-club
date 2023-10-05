/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  id: string,
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  role: number,
  awsSub: string,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  rivalriesA?: ModelRivalryConnection | null,
  rivalriesB?: ModelRivalryConnection | null,
  tierLists?: ModelTierListConnection | null,
};

export type ModelRivalryConnection = {
  __typename: "ModelRivalryConnection",
  items:  Array<Rivalry | null >,
  nextToken?: string | null,
};

export type Rivalry = {
  __typename: "Rivalry",
  id: string,
  userAId: string,
  userBId: string,
  gameId: string,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  contests?: ModelContestConnection | null,
  tierLists?: ModelTierListConnection | null,
};

export type ModelContestConnection = {
  __typename: "ModelContestConnection",
  items:  Array<Contest | null >,
  nextToken?: string | null,
};

export type Contest = {
  __typename: "Contest",
  id: string,
  rivalryId: string,
  tierSlotAId: string,
  tierSlotBId: string,
  result?: number | null,
  bias?: number | null,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
};

export type ModelTierListConnection = {
  __typename: "ModelTierListConnection",
  items:  Array<TierList | null >,
  nextToken?: string | null,
};

export type TierList = {
  __typename: "TierList",
  id: string,
  rivalryId: string,
  userId: string,
  standing?: number | null,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  tierSlots?: ModelTierSlotConnection | null,
};

export type ModelTierSlotConnection = {
  __typename: "ModelTierSlotConnection",
  items:  Array<TierSlot | null >,
  nextToken?: string | null,
};

export type TierSlot = {
  __typename: "TierSlot",
  id: string,
  tierListId: string,
  fighterId: string,
  position?: number | null,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
};

export type CreateContestInput = {
  id?: string | null,
  rivalryId: string,
  tierSlotAId: string,
  tierSlotBId: string,
  result?: number | null,
  bias?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelContestConditionInput = {
  rivalryId?: ModelIDInput | null,
  tierSlotAId?: ModelIDInput | null,
  tierSlotBId?: ModelIDInput | null,
  result?: ModelIntInput | null,
  bias?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelContestConditionInput | null > | null,
  or?: Array< ModelContestConditionInput | null > | null,
  not?: ModelContestConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateContestInput = {
  id: string,
  rivalryId?: string | null,
  tierSlotAId?: string | null,
  tierSlotBId?: string | null,
  result?: number | null,
  bias?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteContestInput = {
  id: string,
};

export type CreateFighterInput = {
  id?: string | null,
  name: string,
  gameId: string,
  gamePosition?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelFighterConditionInput = {
  name?: ModelStringInput | null,
  gameId?: ModelIDInput | null,
  gamePosition?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFighterConditionInput | null > | null,
  or?: Array< ModelFighterConditionInput | null > | null,
  not?: ModelFighterConditionInput | null,
};

export type Fighter = {
  __typename: "Fighter",
  id: string,
  name: string,
  gameId: string,
  gamePosition?: number | null,
  createdAt: string,
  updatedAt: string,
  tierSlots?: ModelTierSlotConnection | null,
};

export type UpdateFighterInput = {
  id: string,
  name?: string | null,
  gameId?: string | null,
  gamePosition?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteFighterInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  fighters?: ModelFighterConnection | null,
  rivalries?: ModelRivalryConnection | null,
};

export type ModelFighterConnection = {
  __typename: "ModelFighterConnection",
  items:  Array<Fighter | null >,
  nextToken?: string | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateRivalryInput = {
  id?: string | null,
  userAId: string,
  userBId: string,
  gameId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelRivalryConditionInput = {
  userAId?: ModelIDInput | null,
  userBId?: ModelIDInput | null,
  gameId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelRivalryConditionInput | null > | null,
  or?: Array< ModelRivalryConditionInput | null > | null,
  not?: ModelRivalryConditionInput | null,
};

export type UpdateRivalryInput = {
  id: string,
  userAId?: string | null,
  userBId?: string | null,
  gameId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteRivalryInput = {
  id: string,
};

export type CreateTierListInput = {
  id?: string | null,
  rivalryId: string,
  userId: string,
  standing?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelTierListConditionInput = {
  rivalryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  standing?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelTierListConditionInput | null > | null,
  or?: Array< ModelTierListConditionInput | null > | null,
  not?: ModelTierListConditionInput | null,
};

export type UpdateTierListInput = {
  id: string,
  rivalryId?: string | null,
  userId?: string | null,
  standing?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteTierListInput = {
  id: string,
};

export type CreateTierSlotInput = {
  id?: string | null,
  tierListId: string,
  fighterId: string,
  position?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelTierSlotConditionInput = {
  tierListId?: ModelIDInput | null,
  fighterId?: ModelIDInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelTierSlotConditionInput | null > | null,
  or?: Array< ModelTierSlotConditionInput | null > | null,
  not?: ModelTierSlotConditionInput | null,
};

export type UpdateTierSlotInput = {
  id: string,
  tierListId?: string | null,
  fighterId?: string | null,
  position?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteTierSlotInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  role: number,
  awsSub: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  role?: ModelIntInput | null,
  awsSub?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  role?: number | null,
  awsSub?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelContestFilterInput = {
  id?: ModelIDInput | null,
  rivalryId?: ModelIDInput | null,
  tierSlotAId?: ModelIDInput | null,
  tierSlotBId?: ModelIDInput | null,
  result?: ModelIntInput | null,
  bias?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelContestFilterInput | null > | null,
  or?: Array< ModelContestFilterInput | null > | null,
  not?: ModelContestFilterInput | null,
};

export type ModelFighterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  gameId?: ModelIDInput | null,
  gamePosition?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFighterFilterInput | null > | null,
  or?: Array< ModelFighterFilterInput | null > | null,
  not?: ModelFighterFilterInput | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelRivalryFilterInput = {
  id?: ModelIDInput | null,
  userAId?: ModelIDInput | null,
  userBId?: ModelIDInput | null,
  gameId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelRivalryFilterInput | null > | null,
  or?: Array< ModelRivalryFilterInput | null > | null,
  not?: ModelRivalryFilterInput | null,
};

export type ModelTierListFilterInput = {
  id?: ModelIDInput | null,
  rivalryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  standing?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelTierListFilterInput | null > | null,
  or?: Array< ModelTierListFilterInput | null > | null,
  not?: ModelTierListFilterInput | null,
};

export type ModelTierSlotFilterInput = {
  id?: ModelIDInput | null,
  tierListId?: ModelIDInput | null,
  fighterId?: ModelIDInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelTierSlotFilterInput | null > | null,
  or?: Array< ModelTierSlotFilterInput | null > | null,
  not?: ModelTierSlotFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  role?: ModelIntInput | null,
  awsSub?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionContestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rivalryId?: ModelSubscriptionIDInput | null,
  tierSlotAId?: ModelSubscriptionIDInput | null,
  tierSlotBId?: ModelSubscriptionIDInput | null,
  result?: ModelSubscriptionIntInput | null,
  bias?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContestFilterInput | null > | null,
  or?: Array< ModelSubscriptionContestFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFighterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  gameId?: ModelSubscriptionIDInput | null,
  gamePosition?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFighterFilterInput | null > | null,
  or?: Array< ModelSubscriptionFighterFilterInput | null > | null,
};

export type ModelSubscriptionGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameFilterInput | null > | null,
};

export type ModelSubscriptionRivalryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userAId?: ModelSubscriptionIDInput | null,
  userBId?: ModelSubscriptionIDInput | null,
  gameId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRivalryFilterInput | null > | null,
  or?: Array< ModelSubscriptionRivalryFilterInput | null > | null,
};

export type ModelSubscriptionTierListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rivalryId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  standing?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTierListFilterInput | null > | null,
  or?: Array< ModelSubscriptionTierListFilterInput | null > | null,
};

export type ModelSubscriptionTierSlotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tierListId?: ModelSubscriptionIDInput | null,
  fighterId?: ModelSubscriptionIDInput | null,
  position?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTierSlotFilterInput | null > | null,
  or?: Array< ModelSubscriptionTierSlotFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionIntInput | null,
  awsSub?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type GetBasicUserQueryVariables = {
  id: string,
};

export type GetBasicUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type CreateContestMutationVariables = {
  input: CreateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type CreateContestMutation = {
  createContest?:  {
    __typename: "Contest",
    id: string,
    rivalryId: string,
    tierSlotAId: string,
    tierSlotBId: string,
    result?: number | null,
    bias?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type UpdateContestMutationVariables = {
  input: UpdateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type UpdateContestMutation = {
  updateContest?:  {
    __typename: "Contest",
    id: string,
    rivalryId: string,
    tierSlotAId: string,
    tierSlotBId: string,
    result?: number | null,
    bias?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type DeleteContestMutationVariables = {
  input: DeleteContestInput,
  condition?: ModelContestConditionInput | null,
};

export type DeleteContestMutation = {
  deleteContest?:  {
    __typename: "Contest",
    id: string,
    rivalryId: string,
    tierSlotAId: string,
    tierSlotBId: string,
    result?: number | null,
    bias?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type CreateFighterMutationVariables = {
  input: CreateFighterInput,
  condition?: ModelFighterConditionInput | null,
};

export type CreateFighterMutation = {
  createFighter?:  {
    __typename: "Fighter",
    id: string,
    name: string,
    gameId: string,
    gamePosition?: number | null,
    createdAt: string,
    updatedAt: string,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateFighterMutationVariables = {
  input: UpdateFighterInput,
  condition?: ModelFighterConditionInput | null,
};

export type UpdateFighterMutation = {
  updateFighter?:  {
    __typename: "Fighter",
    id: string,
    name: string,
    gameId: string,
    gamePosition?: number | null,
    createdAt: string,
    updatedAt: string,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteFighterMutationVariables = {
  input: DeleteFighterInput,
  condition?: ModelFighterConditionInput | null,
};

export type DeleteFighterMutation = {
  deleteFighter?:  {
    __typename: "Fighter",
    id: string,
    name: string,
    gameId: string,
    gamePosition?: number | null,
    createdAt: string,
    updatedAt: string,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    fighters?:  {
      __typename: "ModelFighterConnection",
      nextToken?: string | null,
    } | null,
    rivalries?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    fighters?:  {
      __typename: "ModelFighterConnection",
      nextToken?: string | null,
    } | null,
    rivalries?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    fighters?:  {
      __typename: "ModelFighterConnection",
      nextToken?: string | null,
    } | null,
    rivalries?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateRivalryMutationVariables = {
  input: CreateRivalryInput,
  condition?: ModelRivalryConditionInput | null,
};

export type CreateRivalryMutation = {
  createRivalry?:  {
    __typename: "Rivalry",
    id: string,
    userAId: string,
    userBId: string,
    gameId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    contests?:  {
      __typename: "ModelContestConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateRivalryMutationVariables = {
  input: UpdateRivalryInput,
  condition?: ModelRivalryConditionInput | null,
};

export type UpdateRivalryMutation = {
  updateRivalry?:  {
    __typename: "Rivalry",
    id: string,
    userAId: string,
    userBId: string,
    gameId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    contests?:  {
      __typename: "ModelContestConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteRivalryMutationVariables = {
  input: DeleteRivalryInput,
  condition?: ModelRivalryConditionInput | null,
};

export type DeleteRivalryMutation = {
  deleteRivalry?:  {
    __typename: "Rivalry",
    id: string,
    userAId: string,
    userBId: string,
    gameId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    contests?:  {
      __typename: "ModelContestConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTierListMutationVariables = {
  input: CreateTierListInput,
  condition?: ModelTierListConditionInput | null,
};

export type CreateTierListMutation = {
  createTierList?:  {
    __typename: "TierList",
    id: string,
    rivalryId: string,
    userId: string,
    standing?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateTierListMutationVariables = {
  input: UpdateTierListInput,
  condition?: ModelTierListConditionInput | null,
};

export type UpdateTierListMutation = {
  updateTierList?:  {
    __typename: "TierList",
    id: string,
    rivalryId: string,
    userId: string,
    standing?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteTierListMutationVariables = {
  input: DeleteTierListInput,
  condition?: ModelTierListConditionInput | null,
};

export type DeleteTierListMutation = {
  deleteTierList?:  {
    __typename: "TierList",
    id: string,
    rivalryId: string,
    userId: string,
    standing?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTierSlotMutationVariables = {
  input: CreateTierSlotInput,
  condition?: ModelTierSlotConditionInput | null,
};

export type CreateTierSlotMutation = {
  createTierSlot?:  {
    __typename: "TierSlot",
    id: string,
    tierListId: string,
    fighterId: string,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type UpdateTierSlotMutationVariables = {
  input: UpdateTierSlotInput,
  condition?: ModelTierSlotConditionInput | null,
};

export type UpdateTierSlotMutation = {
  updateTierSlot?:  {
    __typename: "TierSlot",
    id: string,
    tierListId: string,
    fighterId: string,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type DeleteTierSlotMutationVariables = {
  input: DeleteTierSlotInput,
  condition?: ModelTierSlotConditionInput | null,
};

export type DeleteTierSlotMutation = {
  deleteTierSlot?:  {
    __typename: "TierSlot",
    id: string,
    tierListId: string,
    fighterId: string,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    rivalriesA?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    rivalriesB?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    rivalriesA?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    rivalriesB?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    rivalriesA?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    rivalriesB?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetContestQueryVariables = {
  id: string,
};

export type GetContestQuery = {
  getContest?:  {
    __typename: "Contest",
    id: string,
    rivalryId: string,
    tierSlotAId: string,
    tierSlotBId: string,
    result?: number | null,
    bias?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type ListContestsQueryVariables = {
  filter?: ModelContestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestsQuery = {
  listContests?:  {
    __typename: "ModelContestConnection",
    items:  Array< {
      __typename: "Contest",
      id: string,
      rivalryId: string,
      tierSlotAId: string,
      tierSlotBId: string,
      result?: number | null,
      bias?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFighterQueryVariables = {
  id: string,
};

export type GetFighterQuery = {
  getFighter?:  {
    __typename: "Fighter",
    id: string,
    name: string,
    gameId: string,
    gamePosition?: number | null,
    createdAt: string,
    updatedAt: string,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListFightersQueryVariables = {
  filter?: ModelFighterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFightersQuery = {
  listFighters?:  {
    __typename: "ModelFighterConnection",
    items:  Array< {
      __typename: "Fighter",
      id: string,
      name: string,
      gameId: string,
      gamePosition?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    fighters?:  {
      __typename: "ModelFighterConnection",
      nextToken?: string | null,
    } | null,
    rivalries?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRivalryQueryVariables = {
  id: string,
};

export type GetRivalryQuery = {
  getRivalry?:  {
    __typename: "Rivalry",
    id: string,
    userAId: string,
    userBId: string,
    gameId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    contests?:  {
      __typename: "ModelContestConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListRivalriesQueryVariables = {
  filter?: ModelRivalryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRivalriesQuery = {
  listRivalries?:  {
    __typename: "ModelRivalryConnection",
    items:  Array< {
      __typename: "Rivalry",
      id: string,
      userAId: string,
      userBId: string,
      gameId: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTierListQueryVariables = {
  id: string,
};

export type GetTierListQuery = {
  getTierList?:  {
    __typename: "TierList",
    id: string,
    rivalryId: string,
    userId: string,
    standing?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTierListsQueryVariables = {
  filter?: ModelTierListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTierListsQuery = {
  listTierLists?:  {
    __typename: "ModelTierListConnection",
    items:  Array< {
      __typename: "TierList",
      id: string,
      rivalryId: string,
      userId: string,
      standing?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTierSlotQueryVariables = {
  id: string,
};

export type GetTierSlotQuery = {
  getTierSlot?:  {
    __typename: "TierSlot",
    id: string,
    tierListId: string,
    fighterId: string,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type ListTierSlotsQueryVariables = {
  filter?: ModelTierSlotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTierSlotsQuery = {
  listTierSlots?:  {
    __typename: "ModelTierSlotConnection",
    items:  Array< {
      __typename: "TierSlot",
      id: string,
      tierListId: string,
      fighterId: string,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    rivalriesA?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    rivalriesB?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      firstName?: string | null,
      lastName?: string | null,
      role: number,
      awsSub: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContestsByRivalryIdAndIdQueryVariables = {
  rivalryId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContestsByRivalryIdAndIdQuery = {
  contestsByRivalryIdAndId?:  {
    __typename: "ModelContestConnection",
    items:  Array< {
      __typename: "Contest",
      id: string,
      rivalryId: string,
      tierSlotAId: string,
      tierSlotBId: string,
      result?: number | null,
      bias?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContestsByTierSlotAIdAndIdQueryVariables = {
  tierSlotAId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContestsByTierSlotAIdAndIdQuery = {
  contestsByTierSlotAIdAndId?:  {
    __typename: "ModelContestConnection",
    items:  Array< {
      __typename: "Contest",
      id: string,
      rivalryId: string,
      tierSlotAId: string,
      tierSlotBId: string,
      result?: number | null,
      bias?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContestsByTierSlotBIdAndIdQueryVariables = {
  tierSlotBId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContestsByTierSlotBIdAndIdQuery = {
  contestsByTierSlotBIdAndId?:  {
    __typename: "ModelContestConnection",
    items:  Array< {
      __typename: "Contest",
      id: string,
      rivalryId: string,
      tierSlotAId: string,
      tierSlotBId: string,
      result?: number | null,
      bias?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FightersByGameIdAndIdQueryVariables = {
  gameId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFighterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FightersByGameIdAndIdQuery = {
  fightersByGameIdAndId?:  {
    __typename: "ModelFighterConnection",
    items:  Array< {
      __typename: "Fighter",
      id: string,
      name: string,
      gameId: string,
      gamePosition?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RivalriesByUserAIdAndIdQueryVariables = {
  userAId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRivalryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RivalriesByUserAIdAndIdQuery = {
  rivalriesByUserAIdAndId?:  {
    __typename: "ModelRivalryConnection",
    items:  Array< {
      __typename: "Rivalry",
      id: string,
      userAId: string,
      userBId: string,
      gameId: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RivalriesByUserBIdAndIdQueryVariables = {
  userBId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRivalryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RivalriesByUserBIdAndIdQuery = {
  rivalriesByUserBIdAndId?:  {
    __typename: "ModelRivalryConnection",
    items:  Array< {
      __typename: "Rivalry",
      id: string,
      userAId: string,
      userBId: string,
      gameId: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RivalriesByGameIdAndIdQueryVariables = {
  gameId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRivalryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RivalriesByGameIdAndIdQuery = {
  rivalriesByGameIdAndId?:  {
    __typename: "ModelRivalryConnection",
    items:  Array< {
      __typename: "Rivalry",
      id: string,
      userAId: string,
      userBId: string,
      gameId: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TierListsByRivalryIdAndIdQueryVariables = {
  rivalryId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTierListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TierListsByRivalryIdAndIdQuery = {
  tierListsByRivalryIdAndId?:  {
    __typename: "ModelTierListConnection",
    items:  Array< {
      __typename: "TierList",
      id: string,
      rivalryId: string,
      userId: string,
      standing?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TierListsByUserIdAndIdQueryVariables = {
  userId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTierListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TierListsByUserIdAndIdQuery = {
  tierListsByUserIdAndId?:  {
    __typename: "ModelTierListConnection",
    items:  Array< {
      __typename: "TierList",
      id: string,
      rivalryId: string,
      userId: string,
      standing?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TierSlotsByTierListIdAndIdQueryVariables = {
  tierListId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTierSlotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TierSlotsByTierListIdAndIdQuery = {
  tierSlotsByTierListIdAndId?:  {
    __typename: "ModelTierSlotConnection",
    items:  Array< {
      __typename: "TierSlot",
      id: string,
      tierListId: string,
      fighterId: string,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TierSlotsByFighterIdAndIdQueryVariables = {
  fighterId: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTierSlotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TierSlotsByFighterIdAndIdQuery = {
  tierSlotsByFighterIdAndId?:  {
    __typename: "ModelTierSlotConnection",
    items:  Array< {
      __typename: "TierSlot",
      id: string,
      tierListId: string,
      fighterId: string,
      position?: number | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByAwsSubQueryVariables = {
  awsSub: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByAwsSubQuery = {
  usersByAwsSub?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      firstName?: string | null,
      lastName?: string | null,
      role: number,
      awsSub: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
};

export type OnCreateContestSubscription = {
  onCreateContest?:  {
    __typename: "Contest",
    id: string,
    rivalryId: string,
    tierSlotAId: string,
    tierSlotBId: string,
    result?: number | null,
    bias?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type OnUpdateContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
};

export type OnUpdateContestSubscription = {
  onUpdateContest?:  {
    __typename: "Contest",
    id: string,
    rivalryId: string,
    tierSlotAId: string,
    tierSlotBId: string,
    result?: number | null,
    bias?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type OnDeleteContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
};

export type OnDeleteContestSubscription = {
  onDeleteContest?:  {
    __typename: "Contest",
    id: string,
    rivalryId: string,
    tierSlotAId: string,
    tierSlotBId: string,
    result?: number | null,
    bias?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type OnCreateFighterSubscriptionVariables = {
  filter?: ModelSubscriptionFighterFilterInput | null,
};

export type OnCreateFighterSubscription = {
  onCreateFighter?:  {
    __typename: "Fighter",
    id: string,
    name: string,
    gameId: string,
    gamePosition?: number | null,
    createdAt: string,
    updatedAt: string,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateFighterSubscriptionVariables = {
  filter?: ModelSubscriptionFighterFilterInput | null,
};

export type OnUpdateFighterSubscription = {
  onUpdateFighter?:  {
    __typename: "Fighter",
    id: string,
    name: string,
    gameId: string,
    gamePosition?: number | null,
    createdAt: string,
    updatedAt: string,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteFighterSubscriptionVariables = {
  filter?: ModelSubscriptionFighterFilterInput | null,
};

export type OnDeleteFighterSubscription = {
  onDeleteFighter?:  {
    __typename: "Fighter",
    id: string,
    name: string,
    gameId: string,
    gamePosition?: number | null,
    createdAt: string,
    updatedAt: string,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    fighters?:  {
      __typename: "ModelFighterConnection",
      nextToken?: string | null,
    } | null,
    rivalries?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    fighters?:  {
      __typename: "ModelFighterConnection",
      nextToken?: string | null,
    } | null,
    rivalries?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    fighters?:  {
      __typename: "ModelFighterConnection",
      nextToken?: string | null,
    } | null,
    rivalries?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateRivalrySubscriptionVariables = {
  filter?: ModelSubscriptionRivalryFilterInput | null,
};

export type OnCreateRivalrySubscription = {
  onCreateRivalry?:  {
    __typename: "Rivalry",
    id: string,
    userAId: string,
    userBId: string,
    gameId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    contests?:  {
      __typename: "ModelContestConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateRivalrySubscriptionVariables = {
  filter?: ModelSubscriptionRivalryFilterInput | null,
};

export type OnUpdateRivalrySubscription = {
  onUpdateRivalry?:  {
    __typename: "Rivalry",
    id: string,
    userAId: string,
    userBId: string,
    gameId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    contests?:  {
      __typename: "ModelContestConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteRivalrySubscriptionVariables = {
  filter?: ModelSubscriptionRivalryFilterInput | null,
};

export type OnDeleteRivalrySubscription = {
  onDeleteRivalry?:  {
    __typename: "Rivalry",
    id: string,
    userAId: string,
    userBId: string,
    gameId: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    contests?:  {
      __typename: "ModelContestConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTierListSubscriptionVariables = {
  filter?: ModelSubscriptionTierListFilterInput | null,
};

export type OnCreateTierListSubscription = {
  onCreateTierList?:  {
    __typename: "TierList",
    id: string,
    rivalryId: string,
    userId: string,
    standing?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateTierListSubscriptionVariables = {
  filter?: ModelSubscriptionTierListFilterInput | null,
};

export type OnUpdateTierListSubscription = {
  onUpdateTierList?:  {
    __typename: "TierList",
    id: string,
    rivalryId: string,
    userId: string,
    standing?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteTierListSubscriptionVariables = {
  filter?: ModelSubscriptionTierListFilterInput | null,
};

export type OnDeleteTierListSubscription = {
  onDeleteTierList?:  {
    __typename: "TierList",
    id: string,
    rivalryId: string,
    userId: string,
    standing?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    tierSlots?:  {
      __typename: "ModelTierSlotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTierSlotSubscriptionVariables = {
  filter?: ModelSubscriptionTierSlotFilterInput | null,
};

export type OnCreateTierSlotSubscription = {
  onCreateTierSlot?:  {
    __typename: "TierSlot",
    id: string,
    tierListId: string,
    fighterId: string,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type OnUpdateTierSlotSubscriptionVariables = {
  filter?: ModelSubscriptionTierSlotFilterInput | null,
};

export type OnUpdateTierSlotSubscription = {
  onUpdateTierSlot?:  {
    __typename: "TierSlot",
    id: string,
    tierListId: string,
    fighterId: string,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type OnDeleteTierSlotSubscriptionVariables = {
  filter?: ModelSubscriptionTierSlotFilterInput | null,
};

export type OnDeleteTierSlotSubscription = {
  onDeleteTierSlot?:  {
    __typename: "TierSlot",
    id: string,
    tierListId: string,
    fighterId: string,
    position?: number | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    rivalriesA?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    rivalriesB?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    rivalriesA?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    rivalriesB?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    role: number,
    awsSub: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    rivalriesA?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    rivalriesB?:  {
      __typename: "ModelRivalryConnection",
      nextToken?: string | null,
    } | null,
    tierLists?:  {
      __typename: "ModelTierListConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};
