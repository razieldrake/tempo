import { Host } from './host';
import { User } from './user';

export class Job {
    Number
    idJob:string;
    nameJob:string;
    descrJob:string;
    statusJob:string;
    startedAt:Date;
    endAt:Date;
    host:Host[];
    user:User;

}
