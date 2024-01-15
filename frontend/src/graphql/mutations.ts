/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
      id
      tag
      title
      text
      image
      lead
      writer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
      id
      tag
      title
      text
      image
      lead
      writer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
      id
      tag
      title
      text
      image
      lead
      writer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPlayers = /* GraphQL */ `
  mutation CreatePlayers(
    $input: CreatePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    createPlayers(input: $input, condition: $condition) {
      id
      firstName
      lastName
      playerPhoto
      playerNumber
      playerTeam
      playerPosition
      playerShoots
      birthYear
      linkToEliteProspects
      linkToTeamSite
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePlayers = /* GraphQL */ `
  mutation UpdatePlayers(
    $input: UpdatePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    updatePlayers(input: $input, condition: $condition) {
      id
      firstName
      lastName
      playerPhoto
      playerNumber
      playerTeam
      playerPosition
      playerShoots
      birthYear
      linkToEliteProspects
      linkToTeamSite
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePlayers = /* GraphQL */ `
  mutation DeletePlayers(
    $input: DeletePlayersInput!
    $condition: ModelPlayersConditionInput
  ) {
    deletePlayers(input: $input, condition: $condition) {
      id
      firstName
      lastName
      playerPhoto
      playerNumber
      playerTeam
      playerPosition
      playerShoots
      birthYear
      linkToEliteProspects
      linkToTeamSite
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
