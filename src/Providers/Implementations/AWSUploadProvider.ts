import { S3 } from 'aws-sdk'
import crypto from 'crypto'
import { FileUploader, IFile, IUploadedFile } from '../IFileUpload'

export class AWSUploadProvider implements FileUploader{
    private client : S3

    constructor(){
        this.client = new S3()
    }

    async upload(file: IFile) : Promise<IUploadedFile>{
        const hash = crypto.randomBytes(16).toString('hex')
        const key = `${hash}-${file.name}`

        const { Key, Location } : IUploadedFile = await this.client
            .upload({ 
                Bucket: process.env.BUCKET_NAME,
                Key: key,
                Body: file.content,
                ContentType: file.type,
                ACL: process.env.ACL
            })
            .promise()

        return { Key, Location }
    }
}