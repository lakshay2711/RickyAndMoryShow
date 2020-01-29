import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FilterService {

    filters = {
        SPECIES : ['human','animal','OthersSpecies'],
        GENDER : ['male','female'],
        ORIGIN : ['earth','jupiter','OthersOrigin']
    }

}
