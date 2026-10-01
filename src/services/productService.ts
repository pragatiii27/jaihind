import { Product, Category, ComfortAnswers, RecommenderMatch } from '../types/product';
import { allProducts, getProductById, getByCategory, searchProducts, filterProducts, sortProducts, getTrending, getRecommended } from '../data/products';
import { calculateMatches } from '../utils/recommend';

export interface ProductService {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: Category): Promise<Product[]>;
  search(query: string): Promise<Product[]>;
  getTrendingProducts(): Promise<Product[]>;
  getRecommendedProducts(answers?: ComfortAnswers): Promise<Product[]>;
  getMattressMatches(answers: ComfortAnswers): Promise<RecommenderMatch[]>;
  filterAndSort(products: Product[], filters: any, sortKey: string): Promise<Product[]>;
}

export class MockProductService implements ProductService {
  async getAllProducts(): Promise<Product[]> {
    return allProducts;
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return getProductById(id);
  }

  async getProductsByCategory(category: Category): Promise<Product[]> {
    return getByCategory(category);
  }

  async search(query: string): Promise<Product[]> {
    return searchProducts(query);
  }

  async getTrendingProducts(): Promise<Product[]> {
    return getTrending();
  }

  async getRecommendedProducts(answers?: ComfortAnswers): Promise<Product[]> {
    return getRecommended(answers);
  }

  async getMattressMatches(answers: ComfortAnswers): Promise<RecommenderMatch[]> {
    const mattresses = await this.getProductsByCategory('mattress');
    return calculateMatches(mattresses, answers);
  }

  async filterAndSort(products: Product[], filters: any, sortKey: string): Promise<Product[]> {
    const filtered = filterProducts(products, filters);
    return sortProducts(filtered, sortKey);
  }
}
