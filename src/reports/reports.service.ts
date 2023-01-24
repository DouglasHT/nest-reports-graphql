import { Injectable } from '@nestjs/common';
import { Product } from './models/product.model';
import { ProductArgs } from './models/dtos/product-args.dto';

@Injectable()
export class ReportService {
  async findOneById(id: string): Promise<Product> {
    return {
      id: '1234',
      title: 'receipt 1',
      description: 'receipt 1 desc',
    } as Product;
  }

  async findAll(args: ProductArgs): Promise<Product[]> {
    return [
      {
        id: '1234',
        title: 'receipt 1',
        description: 'receipt 1 desc',
      },
    ] as Product[];
  }
}
