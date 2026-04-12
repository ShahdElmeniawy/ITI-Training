import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from './models/product.model';

@Pipe({
  name: 'categoryName',
  standalone: true
})
export class CategoryNamePipe implements PipeTransform {
  transform(categories: ICategory[], categoryID: number): string {
    return categories.find(c => c.ID === categoryID)?.Name ?? 'Unknown';
  }
}