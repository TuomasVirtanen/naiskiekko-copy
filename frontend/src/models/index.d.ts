import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tag?: string | null;
  readonly title: string;
  readonly text: string;
  readonly image?: string | null;
  readonly lead?: string | null;
  readonly writer: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tag?: string | null;
  readonly title: string;
  readonly text: string;
  readonly image?: string | null;
  readonly lead?: string | null;
  readonly writer: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}

type EagerPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly playerPhoto?: string | null;
  readonly playerNumber?: number | null;
  readonly playerTeam: string;
  readonly playerPosition?: string | null;
  readonly playerShoots?: string | null;
  readonly birthYear?: string | null;
  readonly linkToEliteProspects?: string | null;
  readonly linkToTeamSite?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly playerPhoto?: string | null;
  readonly playerNumber?: number | null;
  readonly playerTeam: string;
  readonly playerPosition?: string | null;
  readonly playerShoots?: string | null;
  readonly birthYear?: string | null;
  readonly linkToEliteProspects?: string | null;
  readonly linkToTeamSite?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Players = LazyLoading extends LazyLoadingDisabled ? EagerPlayers : LazyPlayers

export declare const Players: (new (init: ModelInit<Players>) => Players) & {
  copyOf(source: Players, mutator: (draft: MutableModel<Players>) => MutableModel<Players> | void): Players;
}