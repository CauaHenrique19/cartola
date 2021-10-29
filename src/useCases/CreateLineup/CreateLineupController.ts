import { Request, Response } from "express";
import { CreateLineupUseCase } from "./CreateLineupUseCase";
import { ICreateLineupDTO } from "./ICreateLineupDTO";

export class CreateLineupController{
    constructor(private createLineupUseCase: CreateLineupUseCase){}

    async handle(request: Request, response: Response){
        const { team_user_id, round_id, price } : ICreateLineupDTO = request.body

        try{
            const lineup = await this.createLineupUseCase.execute({ team_user_id, round_id, price })
            response.json(lineup)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao criar escalação!', error: error.message })
        }
    }
}