import { Port} from './port';
import { Job } from './job';

export class Host {
    id:number;
    ip:string;
    operationSystem:string;
    isNew:string;
    ports:Port[];
    job:Job;
    
}
