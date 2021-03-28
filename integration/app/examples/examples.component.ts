import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'examples-component',
  templateUrl: 'examples.component.html',
  styleUrls: ['examples.component.scss']
})
export class ExamplesComponent implements OnInit, OnDestroy {

  title = 'reactive-forms';
  mobileQuery: MediaQueryList;

  constructor(
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addListener(this.mobileQueryListener.bind(this));
  }

  mobileQueryListener() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
