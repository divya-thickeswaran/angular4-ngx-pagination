import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `
    <div class="text-center">
      <h1>Angular ngx-pagination</h1>
    </div>
    <div class="row">
      <div class="medium-8 medium-offset-2 columns">
        <h2 class="subheader"></h2>
        <ul>
          <li *ngFor="let item of collection | paginate: { itemsPerPage:5, currentPage:p }">{{ item }}</li>
        </ul>

      </div>
    </div>
<pagination-controls (pageChange)="p = $event"></pagination-controls>
  `
})
export class AppComponent  {
    collection: any = [];
    constructor() {
        for (let i = 1; i <= 100; i++) {
            this.collection.push(`Employee ${i}`);
        }
    }

}
