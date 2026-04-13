import { Routes } from '@angular/router';
import { SimpleDotPagination } from './simple-dot-pagination/simple-dot-pagination';
import { CustomDotPagination } from './custom-dot-pagination/custom-dot-pagination';

export const routes: Routes = [
    {
        path: 'simple',
        component: SimpleDotPagination,
        pathMatch: 'full'
    },
    {
        path: 'custom',
        component: CustomDotPagination,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'simple',
        pathMatch: 'full'
    }
];
