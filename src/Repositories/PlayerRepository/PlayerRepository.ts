import knex from "../../database/connection";
import { IPlayerRepository } from "./IPlayerRepository";
import { Player } from "../../Entities/Player";

export class PlayerRepository implements IPlayerRepository{
    async save(player: Player) : Promise<Player>{
        const [returnedPlayer] = await knex<Player, Player>('players')
            .insert(player, '*')

        return returnedPlayer
    }
}