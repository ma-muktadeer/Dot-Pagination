import { Component, signal } from '@angular/core';
import { DotPaginationComponent } from "../dot-pagination/dot-pagination.component";

@Component({
  selector: 'app-custom-dot-pagination',
  imports: [DotPaginationComponent],
  templateUrl: './custom-dot-pagination.html',
  styleUrl: './custom-dot-pagination.scss',
})
export class CustomDotPagination {
  protected readonly title = signal('dot-pagination');
  protected activeIndex = signal<number>(1);

  onPageChange(index: number) {
    this.activeIndex.update((prev) => index);
  }
}
