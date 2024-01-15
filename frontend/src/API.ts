/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostsInput = {
  id?: string | null,
  tag?: string | null,
  title: string,
  text: string,
  image?: string | null,
  lead?: string | null,
  writer: string,
  _version?: number | null,
};

export type ModelPostsConditionInput = {
  tag?: ModelStringInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  lead?: ModelStringInput | null,
  writer?: ModelStringInput | null,
  and?: Array< ModelPostsConditionInput | null > | null,
  or?: Array< ModelPostsConditionInput | null > | null,
  not?: ModelPostsConditionInput | null,
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

export type Posts = {
  __typename: "Posts",
  id: string,
  tag?: string | null,
  title: string,
  text: string,
  image?: string | null,
  lead?: string | null,
  writer: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePostsInput = {
  id: string,
  tag?: string | null,
  title?: string | null,
  text?: string | null,
  image?: string | null,
  lead?: string | null,
  writer?: string | null,
  _version?: number | null,
};

export type DeletePostsInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayersInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  playerPhoto?: string | null,
  playerNumber?: number | null,
  playerTeam: string,
  playerPosition?: string | null,
  playerShoots?: string | null,
  birthYear?: string | null,
  linkToEliteProspects?: string | null,
  linkToTeamSite?: string | null,
  _version?: number | null,
};

export type ModelPlayersConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  playerPhoto?: ModelStringInput | null,
  playerNumber?: ModelIntInput | null,
  playerTeam?: ModelStringInput | null,
  playerPosition?: ModelStringInput | null,
  playerShoots?: ModelStringInput | null,
  birthYear?: ModelStringInput | null,
  linkToEliteProspects?: ModelStringInput | null,
  linkToTeamSite?: ModelStringInput | null,
  and?: Array< ModelPlayersConditionInput | null > | null,
  or?: Array< ModelPlayersConditionInput | null > | null,
  not?: ModelPlayersConditionInput | null,
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

export type Players = {
  __typename: "Players",
  id: string,
  firstName: string,
  lastName: string,
  playerPhoto?: string | null,
  playerNumber?: number | null,
  playerTeam: string,
  playerPosition?: string | null,
  playerShoots?: string | null,
  birthYear?: string | null,
  linkToEliteProspects?: string | null,
  linkToTeamSite?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePlayersInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  playerPhoto?: string | null,
  playerNumber?: number | null,
  playerTeam?: string | null,
  playerPosition?: string | null,
  playerShoots?: string | null,
  birthYear?: string | null,
  linkToEliteProspects?: string | null,
  linkToTeamSite?: string | null,
  _version?: number | null,
};

export type DeletePlayersInput = {
  id: string,
  _version?: number | null,
};

export type ModelPostsFilterInput = {
  id?: ModelIDInput | null,
  tag?: ModelStringInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  lead?: ModelStringInput | null,
  writer?: ModelStringInput | null,
  and?: Array< ModelPostsFilterInput | null > | null,
  or?: Array< ModelPostsFilterInput | null > | null,
  not?: ModelPostsFilterInput | null,
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

export type ModelPostsConnection = {
  __typename: "ModelPostsConnection",
  items:  Array<Posts | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlayersFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  playerPhoto?: ModelStringInput | null,
  playerNumber?: ModelIntInput | null,
  playerTeam?: ModelStringInput | null,
  playerPosition?: ModelStringInput | null,
  playerShoots?: ModelStringInput | null,
  birthYear?: ModelStringInput | null,
  linkToEliteProspects?: ModelStringInput | null,
  linkToTeamSite?: ModelStringInput | null,
  and?: Array< ModelPlayersFilterInput | null > | null,
  or?: Array< ModelPlayersFilterInput | null > | null,
  not?: ModelPlayersFilterInput | null,
};

export type ModelPlayersConnection = {
  __typename: "ModelPlayersConnection",
  items:  Array<Players | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionPostsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tag?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  lead?: ModelSubscriptionStringInput | null,
  writer?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostsFilterInput | null > | null,
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

export type ModelSubscriptionPlayersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  playerPhoto?: ModelSubscriptionStringInput | null,
  playerNumber?: ModelSubscriptionIntInput | null,
  playerTeam?: ModelSubscriptionStringInput | null,
  playerPosition?: ModelSubscriptionStringInput | null,
  playerShoots?: ModelSubscriptionStringInput | null,
  birthYear?: ModelSubscriptionStringInput | null,
  linkToEliteProspects?: ModelSubscriptionStringInput | null,
  linkToTeamSite?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayersFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayersFilterInput | null > | null,
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

export type CreatePostsMutationVariables = {
  input: CreatePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type CreatePostsMutation = {
  createPosts?:  {
    __typename: "Posts",
    id: string,
    tag?: string | null,
    title: string,
    text: string,
    image?: string | null,
    lead?: string | null,
    writer: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostsMutationVariables = {
  input: UpdatePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type UpdatePostsMutation = {
  updatePosts?:  {
    __typename: "Posts",
    id: string,
    tag?: string | null,
    title: string,
    text: string,
    image?: string | null,
    lead?: string | null,
    writer: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostsMutationVariables = {
  input: DeletePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type DeletePostsMutation = {
  deletePosts?:  {
    __typename: "Posts",
    id: string,
    tag?: string | null,
    title: string,
    text: string,
    image?: string | null,
    lead?: string | null,
    writer: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlayersMutationVariables = {
  input: CreatePlayersInput,
  condition?: ModelPlayersConditionInput | null,
};

export type CreatePlayersMutation = {
  createPlayers?:  {
    __typename: "Players",
    id: string,
    firstName: string,
    lastName: string,
    playerPhoto?: string | null,
    playerNumber?: number | null,
    playerTeam: string,
    playerPosition?: string | null,
    playerShoots?: string | null,
    birthYear?: string | null,
    linkToEliteProspects?: string | null,
    linkToTeamSite?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlayersMutationVariables = {
  input: UpdatePlayersInput,
  condition?: ModelPlayersConditionInput | null,
};

export type UpdatePlayersMutation = {
  updatePlayers?:  {
    __typename: "Players",
    id: string,
    firstName: string,
    lastName: string,
    playerPhoto?: string | null,
    playerNumber?: number | null,
    playerTeam: string,
    playerPosition?: string | null,
    playerShoots?: string | null,
    birthYear?: string | null,
    linkToEliteProspects?: string | null,
    linkToTeamSite?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlayersMutationVariables = {
  input: DeletePlayersInput,
  condition?: ModelPlayersConditionInput | null,
};

export type DeletePlayersMutation = {
  deletePlayers?:  {
    __typename: "Players",
    id: string,
    firstName: string,
    lastName: string,
    playerPhoto?: string | null,
    playerNumber?: number | null,
    playerTeam: string,
    playerPosition?: string | null,
    playerShoots?: string | null,
    birthYear?: string | null,
    linkToEliteProspects?: string | null,
    linkToTeamSite?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetPostsQueryVariables = {
  id: string,
};

export type GetPostsQuery = {
  getPosts?:  {
    __typename: "Posts",
    id: string,
    tag?: string | null,
    title: string,
    text: string,
    image?: string | null,
    lead?: string | null,
    writer: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostsConnection",
    items:  Array< {
      __typename: "Posts",
      id: string,
      tag?: string | null,
      title: string,
      text: string,
      image?: string | null,
      lead?: string | null,
      writer: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostsConnection",
    items:  Array< {
      __typename: "Posts",
      id: string,
      tag?: string | null,
      title: string,
      text: string,
      image?: string | null,
      lead?: string | null,
      writer: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayersQueryVariables = {
  id: string,
};

export type GetPlayersQuery = {
  getPlayers?:  {
    __typename: "Players",
    id: string,
    firstName: string,
    lastName: string,
    playerPhoto?: string | null,
    playerNumber?: number | null,
    playerTeam: string,
    playerPosition?: string | null,
    playerShoots?: string | null,
    birthYear?: string | null,
    linkToEliteProspects?: string | null,
    linkToTeamSite?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayersConnection",
    items:  Array< {
      __typename: "Players",
      id: string,
      firstName: string,
      lastName: string,
      playerPhoto?: string | null,
      playerNumber?: number | null,
      playerTeam: string,
      playerPosition?: string | null,
      playerShoots?: string | null,
      birthYear?: string | null,
      linkToEliteProspects?: string | null,
      linkToTeamSite?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayersQueryVariables = {
  filter?: ModelPlayersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayersQuery = {
  syncPlayers?:  {
    __typename: "ModelPlayersConnection",
    items:  Array< {
      __typename: "Players",
      id: string,
      firstName: string,
      lastName: string,
      playerPhoto?: string | null,
      playerNumber?: number | null,
      playerTeam: string,
      playerPosition?: string | null,
      playerShoots?: string | null,
      birthYear?: string | null,
      linkToEliteProspects?: string | null,
      linkToTeamSite?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnCreatePostsSubscription = {
  onCreatePosts?:  {
    __typename: "Posts",
    id: string,
    tag?: string | null,
    title: string,
    text: string,
    image?: string | null,
    lead?: string | null,
    writer: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnUpdatePostsSubscription = {
  onUpdatePosts?:  {
    __typename: "Posts",
    id: string,
    tag?: string | null,
    title: string,
    text: string,
    image?: string | null,
    lead?: string | null,
    writer: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnDeletePostsSubscription = {
  onDeletePosts?:  {
    __typename: "Posts",
    id: string,
    tag?: string | null,
    title: string,
    text: string,
    image?: string | null,
    lead?: string | null,
    writer: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlayersSubscriptionVariables = {
  filter?: ModelSubscriptionPlayersFilterInput | null,
};

export type OnCreatePlayersSubscription = {
  onCreatePlayers?:  {
    __typename: "Players",
    id: string,
    firstName: string,
    lastName: string,
    playerPhoto?: string | null,
    playerNumber?: number | null,
    playerTeam: string,
    playerPosition?: string | null,
    playerShoots?: string | null,
    birthYear?: string | null,
    linkToEliteProspects?: string | null,
    linkToTeamSite?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlayersSubscriptionVariables = {
  filter?: ModelSubscriptionPlayersFilterInput | null,
};

export type OnUpdatePlayersSubscription = {
  onUpdatePlayers?:  {
    __typename: "Players",
    id: string,
    firstName: string,
    lastName: string,
    playerPhoto?: string | null,
    playerNumber?: number | null,
    playerTeam: string,
    playerPosition?: string | null,
    playerShoots?: string | null,
    birthYear?: string | null,
    linkToEliteProspects?: string | null,
    linkToTeamSite?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlayersSubscriptionVariables = {
  filter?: ModelSubscriptionPlayersFilterInput | null,
};

export type OnDeletePlayersSubscription = {
  onDeletePlayers?:  {
    __typename: "Players",
    id: string,
    firstName: string,
    lastName: string,
    playerPhoto?: string | null,
    playerNumber?: number | null,
    playerTeam: string,
    playerPosition?: string | null,
    playerShoots?: string | null,
    birthYear?: string | null,
    linkToEliteProspects?: string | null,
    linkToTeamSite?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
