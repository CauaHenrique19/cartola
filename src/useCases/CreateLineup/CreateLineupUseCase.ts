import { Lineup } from "../../Entities/Lineup";
import { ILineupRepository } from "../../Repositories/LineupRepository/ILineupRepository";
import { ICreateLineupDTO } from "./ICreateLineupDTO";

export class CreateLineupUseCase{
    constructor(private lineupRepository: ILineupRepository){}

    async execute(lineup: ICreateLineupDTO) : Promise<Lineup>{
        const lineupEntity = new Lineup({ 
            team_user_id: lineup.team_user_id, 
            round_id: lineup.round_id, 
            price: lineup.price,
            created_at: new Date()
        })

        const lineupDb = await this.lineupRepository.save(lineupEntity)
        return lineupDb
    }
}