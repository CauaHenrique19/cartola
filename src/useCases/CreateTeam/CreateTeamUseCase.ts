import { Team } from "../../Entities/Team";
import { IFile } from "../../Providers/IFileUpload";
import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { TeamRepository } from "../../Repositories/TeamRepository/TeamRepository";
import { ICreateTeamDTO } from "./ICreateTeamDTO";

export class CreateTeamUseCase{
    constructor(
        private teamRepository : TeamRepository, 
        private awsUploadProvider : AWSUploadProvider
    ){}

    async execute(team: ICreateTeamDTO, file: IFile) : Promise<Team>{
        const { Key, Location } = await this.awsUploadProvider.upload(file)
    
        team.key_image = Key
        team.url_image = Location

        const teamEntity = new Team(team)
        const returnedTeam = await this.teamRepository.save(teamEntity)

        return returnedTeam
    }
}