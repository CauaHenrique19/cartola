import { uuid } from "uuidv4"

export class Team{
    public readonly id?: string
    public name: string
    public readonly key_image?: string
    public image_url: string
    public abbreviation: string

    constructor(props: Omit<Team, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}