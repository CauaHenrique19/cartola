import { Request, Response } from "express";
import { GetAllPlayersUseCase } from "./GetAllPlayersUseCase";

export class GetAllPlayersController{
    constructor(private getAllPlayersUseCase : GetAllPlayersUseCase){}

    async handle(request: Request, response: Response){
        try{
            const players = await this.getAllPlayersUseCase.execute()
            response.json(players)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao pegar os jogadores!', error: error.message })
        }
    }
}