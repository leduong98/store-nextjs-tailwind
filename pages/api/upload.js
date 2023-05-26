import multiparty from 'multiparty';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types';
import {mongooseConnect} from "lib/mongoose";
import {isAdminRequest} from "pages/api/auth/[...nextauth]";
const bucketName = 'dawid-next-ecommerce';
import { storage } from '/lib/firebase';

export default async function handle(req,res) {
  await mongooseConnect();
  // await isAdminRequest(req,res);

  const form = new multiparty.Form();
  const {fields,files} = await new Promise((resolve,reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({fields,files});
    });
  });

  const links = [];
  for (const file of files.file) {
    const storageRef = storage.ref();
    const ext = file.originalFilename.split('.').pop();
    const newFilename = Date.now() + '.' + ext;
    const fileRef = storageRef.child(newFilename);
    const snapshot = await fileRef.put(file.data);
    const downloadURL = await snapshot.ref.getDownloadURL();
    links.push(downloadURL);
  }
  return res.json({links});
}

export const config = {
  api: {bodyParser: false},
};
