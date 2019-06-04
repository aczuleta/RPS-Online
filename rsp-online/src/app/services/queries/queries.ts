import gql from 'graphql-tag';

export const playerSummaries = gql `query {
                                    playerSummaries{
                                        player,
                                        wins
                                    }
                                }`;
export const getRulesets = gql `query{
                                    rulesets{
                                      id,
                                      name
                                    }
                                }`;
export const getMoves = gql `query{
                                moves{
                                    id,
                                    name,
                                    imageRoute
                                }
                            }`;
export const getRules = gql `query rules($ruleset:ID!){
                                rules(ruleset:$ruleset){
                                    idRuleset,
                                    rulesetName,
                                    moves{
                                        id,
                                        name,
                                        imageRoute,
                                        kills{
                                                name
                                            }
                                        }
                                    }
                            }`    