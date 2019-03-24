import { Port } from './port';
import { Cve } from './cve';

export class Service {
    idService:number;
    nameService:string;
    versionService:string;
    OsService:string;
    guessedOSService:string;
    cve:Cve[];
    port:Port;
}
