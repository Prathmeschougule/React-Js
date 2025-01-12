import conf from '../conf.js'
import {Clinet,Account,ID} from 'appwrite'


export class AuthService {
    Clinet = new Clinet();
    account;

    constructor(){
        this.Clinet
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account=new Account(this.Clinet);
    }
}

const authService =  new AuthService();

export default authService;


// now We Createt  Account 
// 10:42
