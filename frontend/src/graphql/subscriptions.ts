/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
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
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
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
export const onCreatePlayers = /* GraphQL */ `
  subscription OnCreatePlayers($filter: ModelSubscriptionPlayersFilterInput) {
    onCreatePlayers(filter: $filter) {
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
export const onUpdatePlayers = /* GraphQL */ `
  subscription OnUpdatePlayers($filter: ModelSubscriptionPlayersFilterInput) {
    onUpdatePlayers(filter: $filter) {
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
export const onDeletePlayers = /* GraphQL */ `
  subscription OnDeletePlayers($filter: ModelSubscriptionPlayersFilterInput) {
    onDeletePlayers(filter: $filter) {
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
