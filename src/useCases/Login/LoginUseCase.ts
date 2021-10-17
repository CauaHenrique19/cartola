import { UserRepository } from "../../Repositories/UserRepository/UserRepository";
import { ILoginDTO } from "./ILoginDTO";
import { IAuthenticationUserDTO } from "../../DTO/IAuthenticationUserDTO";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class LoginUseCase{
    constructor(private userRepository : UserRepository){}

    async execute(loginData : ILoginDTO) : Promise<IAuthenticationUserDTO> {

        const user = await this.userRepository.findByEmail(loginData.email)
        if(!user) throw new Error("Usuário não encontrado!")

        const auth = await bcrypt.compare(loginData.password, user.password)
        if(!auth) throw new Error("Senha inválida!")

        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET)
        delete user.password

        const authenticatedUser : IAuthenticationUserDTO = {
            user: user,
            auth: true,
            token
        }

        return authenticatedUser
    }
}