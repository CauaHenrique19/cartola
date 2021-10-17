import { v4 as uuid } from 'uuid'

export class Team{
    public readonly id?: string
    public name: string
    public readonly key_image?: string
    public url_image: string
    public abbreviation: string

    constructor(props: Omit<Team, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}