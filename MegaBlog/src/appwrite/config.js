import conf from '../conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'



export class Service {
    Client = new Client;
    database;
    bucket;

    constructor() {
        this.Clinet
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases();
        this.bucket = new Storage(this.Client);
    }


    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteSDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content, featuredImage,
                    status,
                    userId,
                }
            )


        } catch (error) {
            console.log("Appwrite serive :: createPost :: error  ", error);

        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.databases.updateDocument(
                conf.appwriteSDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error  ", error);

        }
    }

    async deletePost({ slug }) {
        try {

            await this.databases.deleteDocument(
                conf.appwriteCollectionId,
                conf.appwriteProjectId,
                slug,
            )
            return true;

        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error ", error);
            return false;

        }

    }

    async getPost({ slug }) {
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteSDatabaseId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error ", error);

        }
    }

    async getAllPost() {
        try {

            return await this.databases.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteSDatabaseId,
                queries = [Query.equal("status", "active")],

            )

        } catch (error) {
            console.log("Appwrite serive :: getAllPost :: error ", error);
            return false;
        }
    }


    // File Upload Services

    async uploadFile(file) {
        try {

            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error ", error);
            return false;

        }

    }



    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error ", error);

            return false;
        }
    }



    getFilePreviwe(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }

}
const serive = new Service(0)
export default serive
