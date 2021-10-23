import { Team } from "../../Entities/Team";
import { FileUploader, IFile } from "../../Providers/IFileUpload";
import { ITeamRepository } from "../../Repositories/TeamRepository/ITeamRepository";
import { ICreateTeamDTO } from "./ICreateTeamDTO";

export class CreateTeamUseCase{
    constructor(
        private teamRepository : ITeamRepository, 
        private awsUploadProvider : FileUploader
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