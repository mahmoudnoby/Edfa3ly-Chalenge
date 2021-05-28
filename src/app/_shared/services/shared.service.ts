import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    private categoryIdSource = new BehaviorSubject<number>(3);
    currentCat_id = this.categoryIdSource.asObservable();
    constructor() {}

    changeCatId(id: number) {
        this.categoryIdSource.next(id);
    }
}