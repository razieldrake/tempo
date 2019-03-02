import { Service } from './service';

export class Cve {

    idCVE: string;
    baseScoreV2 :number;
    impactScoreV2:number;
    vectorv2:string;
    attackVectorV2:string;
    descCVE:string;
    service:Service;
}
