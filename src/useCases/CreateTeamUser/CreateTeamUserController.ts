import { Request, Response } from "express";
import { CreateTeamUserUseCase } from "./CreateTeamUserUseCase";
import { ICreateTeamUserDTO } from "./ICreateTeamUserDTO";

export class CreateTeamUserController{
    constructor(private createTeamUserUseCase : CreateTeamUserUseCase){}

    async handle(request: Request, response: Response){
        const teamUser : ICreateTeamUserDTO = request.body

        try{
            const returnedTeam = await this.createTeamUserUseCase.execute(teamUser)
            response.json(returnedTeam)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao criar time do usuário!' })
        }
    }
}