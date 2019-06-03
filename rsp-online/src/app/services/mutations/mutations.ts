import gql from 'graphql-tag';

export const createResult = gql`
    mutation createResult($player1: String!, $player2: String!, $winner:String!){
        createResult(player1: $player1 , player2: $player2, winner: $winner)
    }`;

export const createMove = gql `
    mutation createMove($name:String!, $imageRoute:String!, $kills: [ID]!){
        createMove(name: $name, imageRoute: $imageRoute, kills: $kills)
    }`;

export const createRuleset = gql `
    mutation createRuleset($name:String!, $moves:[ID]!){
        createRuleset(name: $name, moves: $moves)
    }`;