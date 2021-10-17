import knex from '../../database/connection'
import { User } from "../../Entities/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    async findByEmail(email: string) : Promise<User>{
        const user = await knex('users')
            .select('id', 'email', 'password', 'name', 'admin')
            .where({ email })
            .first()

        return user
    }

    async save(user: User) : Promise<User>{
        const [returnedUser] = await knex('users')
            .insert(user, ['id', 'name', 'email', 'admin'])

        return returnedUser
    }
}