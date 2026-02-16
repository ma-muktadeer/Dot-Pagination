import { Component, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dot-pagination',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dot-pagination.component.html',
})
export class DotPaginationComponent {
    totalPages = input<number>(3);
    @Input() activeIndex = signal<number>(0);
    pageChange = output<number>();

    get pages(): number[] {
        return Array(this.totalPages()).fill(0).map((x, i) => i);
    }

    indicatorLeft = signal('1rem');
    indicatorWidth = signal('0.75rem');

    private readonly DOT_WIDTH = 0.75;
    private readonly GAP = 0.5;
    private readonly STRIDE = 1.25;

    ngOnInit() {
        this.updateIndicator(this.activeIndex(), false);
    }

    onPageClick(index: number): void {
        if (index === this.activeIndex()) return;

        const i = this.activeIndex();
        this.activeIndex.update(() => index);
        this.pageChange.emit(index);

        this.animateIndicator(i, index);
    }

    private updateIndicator(index: number, animate: boolean = true) {
        this.indicatorLeft.update(() => `${(index * this.STRIDE) || 1}rem`);
        this.indicatorWidth.update(() => `${this.DOT_WIDTH}rem`);
    }

    private animateIndicator(from: number, to: number) {
        const leftIndex = Math.min(from, to);
        const rightIndex = Math.max(from, to);
        const stretchWidth = (rightIndex - leftIndex) * this.STRIDE + this.DOT_WIDTH;
        const stretchLeft = (leftIndex || 1) * this.STRIDE;

        this.indicatorLeft.update(() => `${stretchLeft}rem`);
        this.indicatorWidth.update(() => `${stretchWidth}rem`);

        setTimeout(() => {
            this.updateIndicator(to);
        }, 150);
    }
}
