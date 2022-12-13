// import AWS from 'aws-sdk'
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity'
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity'
import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
  //   DeleteObjectCommand,
  //   DeleteObjectsCommand,
} from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'

const REGION = 'ap-northeast-2'
const S3_BUCKET = 'danpoj-img'
const IDENTITY_POOL_ID = process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID

const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
})

// Add a photo to an album
export async function addPhoto(albumName, file, callback) {
  try {
    const albumPhotosKey = encodeURIComponent(albumName) + '/'

    await s3.send(
      new ListObjectsCommand({
        Prefix: albumPhotosKey,
        Bucket: S3_BUCKET,
      })
    )

    // const fileName = file.name
    const photoKey = albumPhotosKey + uuidv4()
    const uploadParams = {
      Bucket: S3_BUCKET,
      Key: decodeURIComponent(photoKey),
      Body: file,
    }

    try {
      await s3.send(new PutObjectCommand(uploadParams))
      if (arguments.length === 3) {
        callback(
          `https://danpoj-img.s3.ap-northeast-2.amazonaws.com/${decodeURIComponent(
            photoKey
          )}`,
          file.name
        )
      } else if (arguments.length === 2) {
        return `https://danpoj-img.s3.ap-northeast-2.amazonaws.com/${decodeURIComponent(
          photoKey
        )}`
      }
      console.log('image success')
    } catch (err) {
      return alert('There was an error uploading your photo: ', err.message)
    }
  } catch (err) {
    console.log(err)
  }
}
