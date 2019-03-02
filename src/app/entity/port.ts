import { Service } from './service';
import { Host } from './host';

export class Port {

    idPort:number;
    status:string;
    protocol:string;
    services:Service[];
    host:Host;
}
