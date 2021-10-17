import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserController{
    constructor(private createUserUseCase : CreateUserUseCase){}

    async handle(request: Request, response: Response){
        const { name, email, password, confirmPassword, admin } : ICreateUserDTO = request.body

        try{
            const returnedUser = await this.createUserUseCase.execute({ name, email, password, confirmPassword, admin })
            response.json(returnedUser)
        }
        catch(error){
            response.status(400).json({ message: 'Ocorreu um erro ao criar usuário!', error: error.message })
        }
    }
}