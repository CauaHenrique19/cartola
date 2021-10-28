import { Request, Response } from "express";
import { CreateRoundUseCase } from "./CreateRoundUseCase";
import { ICreateRoundDTO } from "./ICreateRoundDTO";

export class CreateRoundController{
    constructor(private createRoundUseCase: CreateRoundUseCase){}

    async handle(request: Request, response: Response){
        const { description, started_at, end_at } : ICreateRoundDTO = request.body

        try{
            const returnedRound = await this.createRoundUseCase.execute({ description, started_at, end_at })
            response.json(returnedRound)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao criar rodada!', error: error.message })
        }
    }
}