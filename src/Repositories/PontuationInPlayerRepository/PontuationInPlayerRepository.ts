import knex from '../../database/connection'
import { PontuationInPlayer } from '../../Entities/PontuationInPlayer';
import { IPontuationInPlayerRepository } from "./IPontuationInPlayerRepository";

export class PontuationInPlayerRepository implements IPontuationInPlayerRepository{
    async save(pontuationInPlayer: PontuationInPlayer) : Promise<PontuationInPlayer>{
        const [pontuationInPlayerDb] = await knex('pontuations_in_players')
            .insert(pontuationInPlayer, '*')

        return pontuationInPlayerDb
    }
}