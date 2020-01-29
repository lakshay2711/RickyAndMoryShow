import { Subject, BehaviorSubject } from 'rxjs';

export class SharedService {

    onSort = new BehaviorSubject('asc');
    _sortByObs = this.onSort.asObservable();
    selectedFilter = new BehaviorSubject(null);
    _filterObs = this.selectedFilter.asObservable();

    sortCharacters(sortBy: string) {
        this.onSort.next(sortBy);
    }

    filterCharacters(selectedFilter) {
        this.selectedFilter.next(selectedFilter);
    }
}