import { Pontuation } from "../../Entities/Pontuation";
import { IPontuationRepository } from "../../Repositories/PontuationRepository/IPontuationRepository";
import { ICreatePontuationDTO } from "./ICreatePontuationDTO";

export class CreatePontuationUseCase{
    constructor(private pontuationRepository: IPontuationRepository){}

    async execute(pontuation: ICreatePontuationDTO) : Promise<Pontuation>{
        const pontuationEntity = new Pontuation(pontuation)
        const pontuationDb = await this.pontuationRepository.save(pontuationEntity)
        return pontuationDb
    }
}