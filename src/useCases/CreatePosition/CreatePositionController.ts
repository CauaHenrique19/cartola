import { Request, Response } from "express";
import { CreatePositionUseCase } from "./CreatePositionUseCase";
import { ICreatePositionDTO } from "./ICreatePositionDTO";

export class CreatePositionController{
    constructor(private createPositionUseCase : CreatePositionUseCase){}

    async handle(request: Request, response: Response){
        const position : ICreatePositionDTO = request.body
        
        try{
            const returnedPosition = await this.createPositionUseCase.execute(position)
            response.json(returnedPosition)
        }
        catch(error){
            return response.status(400).json({ message: 'Ocorreu um erro ao criar posição!', error: error.message })
        }
    }
}