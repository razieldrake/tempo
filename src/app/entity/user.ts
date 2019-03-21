import { Job } from './job';

export class User {

    idUser?:number;
    username:string;
    password:string;
    role:string;
    jobs?:Job[];
}
