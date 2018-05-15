import { Directive, Input, HostListener } from '@angular/core';

// export for convenience.
export { RouterLink} from '@angular/router';

/* tslint:disable:directive-class-suffix */
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[routerLink]'
  })
  export class RouterLinkDirectiveStub {
    navigatedTo: any = null;
    // tslint:disable-next-line:no-input-rename
    @Input('routerLink') linkParams: any;

    @HostListener('click') onclick() {
      this.navigatedTo = this.linkParams;
    }
  }

/// Dummy module to satisfy Angular Language service. Never used.
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    RouterLinkDirectiveStub
  ]
})

export class RouterStubsModule {}
