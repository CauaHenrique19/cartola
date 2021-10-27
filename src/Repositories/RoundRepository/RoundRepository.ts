import knex from '../../database/connection'
import { Round } from "../../Entities/Round";
import { IRoundRepository } from "./IRoundRepository";

export class RoundRepository implements IRoundRepository{
    async save(round: Round) : Promise<Round>{
        const [roundDb] = await knex('rounds')
            .insert(round, '*')

        return roundDb
    }
}