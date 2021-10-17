import { uuid } from "uuidv4"

export class User{
    public id?: string
    public email: string
    public password?: string
    public name: string
    public admin: boolean

    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}