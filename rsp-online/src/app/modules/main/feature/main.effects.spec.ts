import { TestBed } from "@angular/core/testing";
import { Move, Player, Play  } from '../../../models/models.barrel';
import {selectRoundWinner, selectWinner} from './main.effects';

const initStatus = [false, false, false];
const middleStatus = [true, true, false];
const finalStatus = [true, true, true];

const basicMoves:Array<Move> = [
    new Move("Rock", ["Scissors"], ""),
    new Move("Paper", ["Rock"], ""),
    new Move("Scissors", ["Paper"], "")
];

const player1:Player = new Player("One", initStatus);
const player2:Player = new Player("Two", middleStatus);
const player3:Player = new Player("Three", finalStatus);

describe('Select Winners', () => {

    it("should return player 2 as winner", () => {
        const p1 = new Play(player1, basicMoves[1], 1),
              p2 = new Play(player2, basicMoves[2], 1);
        const result = selectRoundWinner(p1, p2);
        expect(result.username).toBe(player2.username);
    })

    it("should return player 1 as winner", () => {
        const p1 = new Play(player1, basicMoves[1], 1),
              p2 = new Play(player2, basicMoves[0], 1);
        const result = selectRoundWinner(p1, p2);
        expect(result.username).toBe(player1.username);
    })

    it("should return player 2 as winner", () => {
        const p1 = new Play(player1, basicMoves[2], 1),
              p2 = new Play(player2, basicMoves[0], 1);
        const result = selectRoundWinner(p1, p2);
        expect(result.username).toBe(player2.username);
    })

    it("should return player a draw", () => {
        const p1 = new Play(player1, basicMoves[2], 1),
              p2 = new Play(player2, basicMoves[2], 1);
        const result = selectRoundWinner(p1, p2);
        expect(result.username).toBeNull();
    })

    it("should return player a draw", () => {
        const p1 = new Play(player1, basicMoves[1], 1),
              p2 = new Play(player2, basicMoves[1], 1);
        const result = selectRoundWinner(p1, p2);
        expect(result.username).toBeNull();
    })

    it("should return player a draw", () => {
        const p1 = new Play(player1, basicMoves[0], 1),
              p2 = new Play(player2, basicMoves[0], 1);
        const result = selectRoundWinner(p1, p2);
        expect(result.username).toBeNull();
    })

    it("should return player 3", () => {
        const result = selectWinner([player1, player2, player3]);
        expect(result.username).toBe(player3.username);
    }) 

    it("should return null", () => {
        const result = selectWinner([player1, player2]);
        expect(result).toBeNull();
    })
    
})