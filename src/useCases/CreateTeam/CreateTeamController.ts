import { Request, Response } from "express";
import { IFile } from "../../Providers/IFileUpload";
import { CreateTeamUseCase } from "./CreateTeamUseCase";
import { ICreateTeamDTO } from "./ICreateTeamDTO";

export class CreateTeamController{
    constructor(private createTeamUseCase : CreateTeamUseCase){}

    async handle(request: Request, response: Response){
        const team : ICreateTeamDTO = request.body
        const file : IFile = {
            name: request.file.originalname,
            content: request.file.buffer,
            type: request.file.mimetype   
        }

        try{
            const returnedTeam = await this.createTeamUseCase.execute(team, file)
            response.json(returnedTeam)
        }
        catch(error){
            return response.status(400).json({ message: 'Ocorreu um erro ao criar time!', error: error.message })
        }
    }
}