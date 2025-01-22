import conf from '../conf/conf';
import {Client,Account,ID} from 'appwrite'


export class AuthService {
    Client = new Client();
    account;

    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account=new Account(this.Client);
    }

    // Create Accound

    async  createAccound({email,password,name}){
        try {
            const userAccound=await this.account.create(ID.unique(),email,password,name);
            if (userAccound) {
                // call another Accound
                return this. login({email,password});
            }else
            {
                return userAccound;
            }
        } catch (error) {
            throw error;
        }
    }

// Login Account 
    async login({email,password}){
        try {
              return await this.account.createEmailSession(email,password);

        } catch (error) {
            throw error;
        }
    }

    // Get Current user 
    async getCurrentUser(){
        try {

            return await this.account.get();
            
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error  ", error);
            
        }
        return null;
    }

    // logout 
    async  logOut(){
        try {
           return await this.account.deleteSessions()
        } catch (error) {
            
             console.log("Appwrite serive :: logOut :: error",error);
             
        }
       
    }
}

const authService =  new AuthService();

export default authService;



