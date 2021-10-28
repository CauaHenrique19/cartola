import { Round } from "../../Entities/Round";
import { IRoundRepository } from "../../Repositories/RoundRepository/IRoundRepository";
import { ICreateRoundDTO } from "./ICreateRoundDTO";

export class CreateRoundUseCase{
    constructor(private roundRepository : IRoundRepository){}

    async execute(round: ICreateRoundDTO) : Promise<Round>{

        const roundEntity = new Round({ 
            description: round.description, 
            started_at: round.started_at, 
            end_at: round.end_at 
        })

        const returnedRound = await this.roundRepository.save(roundEntity)
        return returnedRound
    }
}