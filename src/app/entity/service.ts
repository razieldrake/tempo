import { Port } from './port';
import { Cve } from './cve';

export class Service {
    idService:number;
    nameService:string;
    versionService:string;
    port:Port;
    cves:Cve[];
}
