import { BehaviorSubject,  Observable } from 'rxjs';
import { State, StateDatas } from './state';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

export class Store {

    state = StateDatas;

    private subject = new BehaviorSubject<State>(this.state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());


    get value(){
        return this.subject.value;
    }

    select<T>(name: string): Observable<T>{
        return this.store.pipe(pluck(name));
    }

    set(name: string, state: any){
        this.subject.next({
            ...this.value, [name]:state
        })
    }
}