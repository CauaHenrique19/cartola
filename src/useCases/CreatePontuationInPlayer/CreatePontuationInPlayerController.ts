import { Request, Response } from "express";
import { CreatePontuationInPlayerUseCase } from "./CreatePontuationInPlayerUseCase";
import { ICreatePontuationInPlayerDTO } from "./ICreatePontuationInPlayerDTO";

export class CreatePontuationInPlayerController{
    constructor(private createPontuationInPlayerUseCase : CreatePontuationInPlayerUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { player_id, pontuation_id, quantity, round_id } : ICreatePontuationInPlayerDTO = request.body
            const pontuationInPlayer = await this.createPontuationInPlayerUseCase.execute({ player_id, pontuation_id, quantity, round_id })
            return response.json(pontuationInPlayer)
        }
        catch(error){
            return response.status(400).json({ message: 'Ocorreu um erro ao criar pontuação!', error: error.message })
        }
    }
}