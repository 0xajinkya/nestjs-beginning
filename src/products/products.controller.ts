import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    // @Body completeBody: { title: string; description: string; price: number },
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const id = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return {
      id: id,
    };
  }

  @Get()
  getAllProducts() {
    return this.productsService.fetchProducts();
  }

  @Get(':price')
  getProduct(@Param('price') prodPrice: number) {
    return this.productsService.fetchProduct(prodPrice);
  }

  @Patch(':price')
  updateProduct(
    @Param('price') prodPrice: number,
    @Body('buyers') prodBuyer: number,
    @Body('review') prodReview: string,
  ) {
    return this.productsService.updateProduct(prodPrice, prodBuyer, prodReview);
  }
}
