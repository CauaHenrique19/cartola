import { User } from "../Entities/User";

export interface IAuthenticationUserDTO{
    user: User
    auth: boolean
    token: string
}