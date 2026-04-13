import { Component, signal } from '@angular/core';
import { SimplePagination } from "../simple-pagination/simple-pagination";

@Component({
  selector: 'app-simple-dot-pagination',
  imports: [SimplePagination],
  templateUrl: './simple-dot-pagination.html',
  styleUrl: './simple-dot-pagination.scss',
})
export class SimpleDotPagination {
  protected readonly title = signal('dot-pagination');
  protected activeIndex = signal<number>(1);
  private interval!: any;

  protected readonly totalPages = 10;

  onPageChange(index: number) {
    this.activeIndex.update(() => index);
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.activeIndex.update((prev) => {
        if (prev === this.totalPages - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
