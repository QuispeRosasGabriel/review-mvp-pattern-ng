import { Component, OnInit } from '@angular/core';
import { from, map, of, switchMap, take, tap,
  Subject,
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject, } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-general-review';
  private sourceSubject = new Subject();
  private sourceBehaviorSubject = new BehaviorSubject<string>('que tal');
  private unsubscribe: Subject<void> = new Subject();

  public users = [
    {
      id: '1',
      name: 'Test',
    },
    {
      id: '2',
      name: 'Test 2',
    },
  ];

 
  public ngOnInit() {
    this.sourceSubject.subscribe((v) => console.log('aaa',v))
    this.sourceSubject.next('hola')
    this.sourceBehaviorSubject.next('holaaa')
    this.sourceBehaviorSubject.pipe(take(1)).subscribe((a) => console.log('en el behavior', a))
    this.sourceBehaviorSubject.next('aaa')
    this.testingOfOperator();
    this.testingFromOperator();
    this.testingMapOperator();
    this.testingSwitchMapOperator();
    this.testingTapOperator();
    this.testingTakeOperator();
  }

  public ngOnDestroy() {
    /**
     * Example to unsubscribe
     */
  }

  private testingOfOperator() {
    /**ALlow to create a streamer from a source
     * Sends the entire value as response,
     * in this case the output is: [1,2,3]
     */
    const arr = [1, 2, 3];
    const arr$ = of(arr);
    const arr2$ = of(this.users);
    arr$.subscribe((values) => console.log(`Emitted Values: ${values}`));
    arr2$.subscribe((values) =>
      console.log(`Emitted Values: ${JSON.stringify(values)}`)
    );
  }

  private testingFromOperator() {
    const arr = [1, 2, 3];
    const secondExample$ = from(
      new Promise((resolve) => resolve([123, 123, 3]))
    );
    const arr$ = from(this.users);
    arr$.subscribe((values) =>
      console.log(`Emitted Values from array: `, values)
    );
    secondExample$.subscribe((values) =>
      console.log(`Emitted Values from promise: `, values)
    );
  }

  private testingMapOperator() {
    const arr = [1, 2, 3];
    const fromArr$ = from(arr);
    from(this.users)
      .pipe(map((value) => value.name + 'holaa'))
      .subscribe((result) => console.log(result));
    fromArr$
      .pipe(map((value) => value + 10))
      .subscribe((value) => console.log(`Emitted Values with map: `, value));
  }

  private testingSwitchMapOperator() {
    /**
     * switchMap receives the values emitted by an Observable,
     * and then returns a new Observable from a different source.
     */
    /*const userDetails$ = from(this.userService.getActiveUserID())
      .pipe(switchMap((id) => this.userService.fetchUserForID(id)))
      .subscribe((user) => console.log('Found user ', user));
      */
  }

  private testingTapOperator() {
    /**
     * Execute something without modify the final result
     */
    const arr = [1, 2, 3];
    const fromArr$ = from(arr);
    fromArr$
      .pipe(tap((v) => console.log('heree', v + 10)))
      .subscribe((value) => console.log(`Emitted Values: `, value));
  }

  private testingTakeOperator() {
    /**
     * Allows to set the max quantity of results you want from the observable
     */
    from([1, 2, 3])
      .pipe(take(2))
      .subscribe((resp) => console.log('test take', resp));
  }
}
