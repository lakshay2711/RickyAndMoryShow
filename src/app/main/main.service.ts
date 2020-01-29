import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MainService {

    showCharacters: Description[] = [
        {
            "id": 3,
            "name": "Ricky",
            "status": "Alive",
            "species": "Animal",
            "gender": "male",
            "created": "2 years ago",
            "image": "https://www.freepngimg.com/thumb/cartoon/10-2-cartoon-png-hd-thumb.png",
            "origin": "Earth",
            "lastLocation": "Earth"
        },
        {
            "id": 1,
            "name": "Morty",
            "status": "Alive",
            "species": "Animal",
            "gender": "male",
            "created": "2 years ago",
            "image": "https://www.freepngimg.com/thumb/cartoon/9-2-cartoon-png-thumb.png",
            "origin": "Earth",
            "lastLocation": "Earth"
        },
        {
            "id": 2,
            "name": "Evil",
            "status": "Dead",
            "species": "Human",
            "gender": "male",
            "created": "2 years ago",
            "image": "https://www.freepngimg.com/thumb/cartoon/2-2-cartoon-png-picture-thumb.png",
            "origin": "Jupiter",
            "lastLocation": "Jupiter"
        },
        {
            "id": 4,
            "name": "Micky",
            "status": "Alive",
            "gender": "female",
            "species": "Human",
            "created": "2 years ago",
            "image": "https://www.freepngimg.com/thumb/cartoon/8-2-cartoon-png-clipart-thumb.png",
            "origin": "Earth",
            "lastLocation": "Earth"
        }
    ]

    getAllCharacters() {
        let promise = new Promise<Description[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.showCharacters);
            }, 2000);
        })
        promise.then(response => {
            return response.slice();
        })
            .catch(error => {
                return error;
            });
        return promise;
    }
}

export interface Description {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    created: string,
    origin: string,
    lastLocation: string
}