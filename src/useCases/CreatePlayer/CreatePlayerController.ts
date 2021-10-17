import { Request, Response } from "express";
import { IFile } from "../../Providers/IFileUpload";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";
import { ICreatePlayerDTO } from "./ICreatePlayerDTO";

export class CreatePlayerController{
    constructor(private createPlayerUseCase : CreatePlayerUseCase){}

    async handle(request: Request, response: Response){
        const player : ICreatePlayerDTO = request.body
        const file : IFile = {
            name: request.file.originalname,
            content: request.file.buffer,
            type: request.file.mimetype
        }

        try{
            const returnedPlayer = await this.createPlayerUseCase.execute(player, file)
            response.json(returnedPlayer)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao criar jogador!', error: error.message })
        }
    }
}