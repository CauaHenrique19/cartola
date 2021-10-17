import { User } from "../../Entities/User";
import { UserRepository } from "../../Repositories/UserRepository/UserRepository";
import { IAuthenticationUserDTO } from "../../DTO/IAuthenticationUserDTO";
import { ICreateUserDTO } from "./ICreateUserDTO";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class CreateUserUseCase{
    constructor(private userRepository : UserRepository){}

    async execute(user: ICreateUserDTO) : Promise<IAuthenticationUserDTO> {
        if(user.password !== user.confirmPassword) throw new Error('Senhas não conferem!')
        const userByEmail = await this.userRepository.findByEmail(user.email)

        if(userByEmail) throw new Error('Usuário com esse e-mail já existente!')

        const salt = await bcrypt.genSalt(10)
        const encrypedPassword = await bcrypt.hash(user.password, salt)

        const userEntity = new User({ email: user.email, name: user.name, password: encrypedPassword, admin: user.admin })
        const returnedUser = await this.userRepository.save(userEntity)

        const token = jwt.sign({ id: returnedUser.id }, process.env.TOKEN_SECRET)

        const authenticatedUser : IAuthenticationUserDTO = {
            user: returnedUser,
            auth: true,
            token
        }

        return authenticatedUser
    }
}