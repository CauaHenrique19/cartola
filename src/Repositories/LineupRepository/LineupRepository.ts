import knex from '../../database/connection'
import { Lineup } from "../../Entities/Lineup";
import { ILineupRepository } from "./ILineupRepository";

export class LineupRepository implements ILineupRepository{
    async save(lineup: Lineup) : Promise<Lineup>{
        const [lineupDb] = await knex('lineups')
            .insert(lineup, '*')

        return lineupDb
    }
}