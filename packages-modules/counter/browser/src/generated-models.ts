/* tslint:disable */

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from './interfaces/context';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  AnyObject: any,
  JSON: any,
  JSONObject: any,
};


export type ClientCounter = {
   __typename?: 'ClientCounter',
  counter?: Maybe<Scalars['Int']>,
};

export type Counter = {
   __typename?: 'Counter',
  amount: Scalars['Int'],
};

export type FieldError = {
   __typename?: 'FieldError',
  field: Scalars['String'],
  message: Scalars['String'],
};



export type Mutation = {
   __typename?: 'Mutation',
  dummy?: Maybe<Scalars['Int']>,
  addCounter?: Maybe<Counter>,
  addCounterState?: Maybe<ClientCounter>,
};


export type MutationAddCounterArgs = {
  amount?: Maybe<Scalars['Int']>
};


export type MutationAddCounterStateArgs = {
  amount: Scalars['Int']
};

export type Node = {
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  dummy?: Maybe<Scalars['Int']>,
  counter?: Maybe<Counter>,
  counterState?: Maybe<ClientCounter>,
};

export type Subscription = {
   __typename?: 'Subscription',
  dummy?: Maybe<Scalars['Int']>,
  counterUpdated?: Maybe<Counter>,
};

export type AddCounterStateMutationVariables = {
  amount: Scalars['Int']
};


export type AddCounterStateMutation = (
  { __typename?: 'Mutation' }
  & { addCounterState: Maybe<(
    { __typename?: 'ClientCounter' }
    & Pick<ClientCounter, 'counter'>
  )> }
);

export type AddCounterMutationVariables = {
  amount: Scalars['Int']
};


export type AddCounterMutation = (
  { __typename?: 'Mutation' }
  & { addCounter: Maybe<(
    { __typename?: 'Counter' }
    & Pick<Counter, 'amount'>
  )> }
);

export type CounterStateQueryVariables = {};


export type CounterStateQuery = (
  { __typename?: 'Query' }
  & { counterState: Maybe<(
    { __typename?: 'ClientCounter' }
    & Pick<ClientCounter, 'counter'>
  )> }
);

export type CounterQueryQueryVariables = {};


export type CounterQueryQuery = (
  { __typename?: 'Query' }
  & { counter: Maybe<(
    { __typename?: 'Counter' }
    & Pick<Counter, 'amount'>
  )> }
);

export type OnCounterUpdatedSubscriptionVariables = {};


export type OnCounterUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { counterUpdated: Maybe<(
    { __typename?: 'Counter' }
    & Pick<Counter, 'amount'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Counter: ResolverTypeWrapper<Counter>,
  ClientCounter: ResolverTypeWrapper<ClientCounter>,
  Mutation: ResolverTypeWrapper<{}>,
  Subscription: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  AnyObject: ResolverTypeWrapper<Scalars['AnyObject']>,
  JSON: ResolverTypeWrapper<Scalars['JSON']>,
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>,
  FieldError: ResolverTypeWrapper<FieldError>,
  Node: ResolverTypeWrapper<Node>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Int: Scalars['Int'],
  Counter: Counter,
  ClientCounter: ClientCounter,
  Mutation: {},
  Subscription: {},
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  AnyObject: Scalars['AnyObject'],
  JSON: Scalars['JSON'],
  JSONObject: Scalars['JSONObject'],
  FieldError: FieldError,
  Node: Node,
  ID: Scalars['ID'],
};

export interface AnyObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AnyObject'], any> {
  name: 'AnyObject'
}

export type ClientCounterResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ClientCounter'] = ResolversParentTypes['ClientCounter']> = {
  counter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type CounterResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Counter'] = ResolversParentTypes['Counter']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FieldErrorResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['FieldError'] = ResolversParentTypes['FieldError']> = {
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject'
}

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  addCounter?: Resolver<Maybe<ResolversTypes['Counter']>, ParentType, ContextType, MutationAddCounterArgs>,
  addCounterState?: Resolver<Maybe<ResolversTypes['ClientCounter']>, ParentType, ContextType, RequireFields<MutationAddCounterStateArgs, 'amount'>>,
};

export type NodeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  counter?: Resolver<Maybe<ResolversTypes['Counter']>, ParentType, ContextType>,
  counterState?: Resolver<Maybe<ResolversTypes['ClientCounter']>, ParentType, ContextType>,
};

export type SubscriptionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  dummy?: SubscriptionResolver<Maybe<ResolversTypes['Int']>, "dummy", ParentType, ContextType>,
  counterUpdated?: SubscriptionResolver<Maybe<ResolversTypes['Counter']>, "counterUpdated", ParentType, ContextType>,
};

export type Resolvers<ContextType = MyContext> = {
  AnyObject?: GraphQLScalarType,
  ClientCounter?: ClientCounterResolvers<ContextType>,
  Counter?: CounterResolvers<ContextType>,
  FieldError?: FieldErrorResolvers<ContextType>,
  JSON?: GraphQLScalarType,
  JSONObject?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  Query?: QueryResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;


export const AddCounterStateDocument = gql`
    mutation addCounterState($amount: Int!) {
  addCounterState(amount: $amount) @client {
    counter
  }
}
    `;
export type AddCounterStateMutationResult = ApolloReactCommon.MutationResult<AddCounterStateMutation>;
export type AddCounterStateMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCounterStateMutation, AddCounterStateMutationVariables>;
export const AddCounterDocument = gql`
    mutation addCounter($amount: Int!) {
  addCounter(amount: $amount) {
    amount
  }
}
    `;
export type AddCounterMutationResult = ApolloReactCommon.MutationResult<AddCounterMutation>;
export type AddCounterMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCounterMutation, AddCounterMutationVariables>;
export const CounterStateDocument = gql`
    query CounterState {
  counterState @client {
    counter
  }
}
    `;
export type CounterStateQueryResult = ApolloReactCommon.QueryResult<CounterStateQuery, CounterStateQueryVariables>;
export const CounterQueryDocument = gql`
    query counterQuery {
  counter {
    amount
  }
}
    `;
export type CounterQueryQueryResult = ApolloReactCommon.QueryResult<CounterQueryQuery, CounterQueryQueryVariables>;
export const OnCounterUpdatedDocument = gql`
    subscription onCounterUpdated {
  counterUpdated {
    amount
  }
}
    `;
export type OnCounterUpdatedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnCounterUpdatedSubscription>;