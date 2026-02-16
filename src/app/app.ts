import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DotPaginationComponent } from './dot-pagination/dot-pagination.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DotPaginationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dot-pagination');
  protected activeIndex = signal<number>(1);

  onPageChange(index: number) {
    this.activeIndex.update((prev) => index);
  }
}
