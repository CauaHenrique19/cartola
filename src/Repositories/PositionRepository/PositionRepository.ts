import knex from "../../database/connection";
import { Position } from "../../Entities/Position";
import { IPositionRepository } from "./IPositionRepository";

export class PositionRepository implements IPositionRepository{
    async save(position: Position) : Promise<Position>{
        const [returnedPosition] = await knex('positions')
            .insert(position, '*')

        return returnedPosition
    }

    async getById(id: string) : Promise<Position>{
        const position = await knex('positions')
            .select('*')
            .where({ id })
            .first()

        return position
    }
}