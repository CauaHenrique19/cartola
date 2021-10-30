import knex from '../../database/connection'
import { Pontuation } from "../../Entities/Pontuation";
import { IPontuationRepository } from "./IPontuationRepository";

export class PontuationRepository implements IPontuationRepository{
    async save(pontuation: Pontuation) : Promise<Pontuation>{
        const [pontuationDb] = await knex('pontuations')
            .insert(pontuation, '*')

        return pontuationDb
    }
}