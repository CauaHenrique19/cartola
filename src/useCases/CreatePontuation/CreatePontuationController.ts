import { Request, Response } from "express";
import { CreatePontuationUseCase } from "./CreatePontuationUseCase";
import { ICreatePontuationDTO } from "./ICreatePontuationDTO";

export class CreatePontuationController{
    constructor(private createPontuationUseCase : CreatePontuationUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { name, value } : ICreatePontuationDTO = request.body
            const pontuation = await this.createPontuationUseCase.execute({ name, value })
            return response.json(pontuation)
        }
        catch(error){
            return response.status(400).json({ message: 'Ocorreu um erro ao criar pontuação!', error: error.message })
        }
    }
}