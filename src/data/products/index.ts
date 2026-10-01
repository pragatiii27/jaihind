import { Product, Category, ComfortAnswers } from '../../types/product';
import { mattresses } from './mattresses';
import { pillows } from './pillows';
import { curtains } from './curtains';
import { beds } from './beds';
import { accessories } from './accessories';

export const allProducts: Product[] = [
  ...mattresses,
  ...pillows,
  ...curtains,
  ...beds,
  ...accessories
];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getByCategory(category: Category): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getTrending(): Product[] {
  return allProducts.filter(
    (p) => p.badges.includes('TRENDING') || p.badges.includes('BESTSELLER')
  );
}

export function getRecommended(answers?: ComfortAnswers): Product[] {
  if (answers && Object.keys(answers).length >= 3) {
    // Basic filter matching for answers
    return allProducts.filter((p) => {
      if (p.category !== 'mattress') return false;
      if (answers.firmness && p.firmness && p.firmness !== answers.firmness) {
        return true; // keep close matches
      }
      return true;
    }).slice(0, 8);
  }
  return allProducts.filter((p) => p.rating >= 4.7).slice(0, 8);
}

export function getRelated(id: string): Product[] {
  const current = getProductById(id);
  if (!current) return allProducts.slice(0, 6);

  if (current.relatedIds && current.relatedIds.length > 0) {
    const specified = current.relatedIds
      .map((relId) => getProductById(relId))
      .filter((p): p is Product => p !== undefined);
    if (specified.length >= 4) return specified;
  }

  // Fallback: same category or highest rated
  return allProducts
    .filter((p) => p.id !== id && (p.category === current.category || p.rating >= 4.7))
    .slice(0, 6);
}

export function getBundle(id: string): Product[] {
  const current = getProductById(id);
  if (!current) return [];

  if (current.bundleIds && current.bundleIds.length > 0) {
    return current.bundleIds
      .map((bId) => getProductById(bId))
      .filter((p): p is Product => p !== undefined);
  }

  // Fallback bundles per category
  if (current.category === 'mattress') {
    return allProducts.filter((p) => p.id === 'ortho-contour-pillow' || p.id === 'quilted-bed-protector');
  } else if (current.category === 'pillow') {
    return allProducts.filter((p) => p.id === 'quilted-bed-protector' || p.id === 'bamboo-fitted-sheet-set');
  } else if (current.category === 'curtain') {
    return allProducts.filter((p) => p.id === 'sheer-linen-curtain' || p.id === 'silk-pillow-cover-pair');
  } else if (current.category === 'bed') {
    return allProducts.filter((p) => p.id === 'cloudrest-premium-mattress' || p.id === 'quilted-bed-protector');
  }
  return [];
}

export function searchProducts(q: string): Product[] {
  const query = q.trim().toLowerCase();
  if (!query) return [];

  return allProducts.filter((p) => {
    return (
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.subcategory.toLowerCase().includes(query) ||
      p.material.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query)) ||
      (p.firmness && p.firmness.toLowerCase().includes(query))
    );
  });
}

export function filterProducts(list: Product[], filters: any): Product[] {
  if (!filters) return list;

  return list.filter((p) => {
    // Category filter
    if (filters.category && filters.category.length > 0) {
      if (!filters.category.includes(p.category)) return false;
    }
    // Min/Max Price
    if (filters.minPrice !== undefined && p.price < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && p.price > filters.maxPrice) return false;

    // Rating
    if (filters.minRating && p.rating < filters.minRating) return false;

    // Brand
    if (filters.brand && filters.brand.length > 0) {
      if (!filters.brand.includes(p.brand)) return false;
    }

    // Material
    if (filters.material && filters.material.length > 0) {
      if (!filters.material.includes(p.material)) return false;
    }

    // Firmness
    if (filters.firmness && filters.firmness.length > 0) {
      if (!p.firmness || !filters.firmness.includes(p.firmness)) return false;
    }

    // Size
    if (filters.size && filters.size.length > 0) {
      if (!p.size.some((s) => filters.size.includes(s))) return false;
    }

    // Thickness
    if (filters.thickness && filters.thickness.length > 0) {
      if (!p.thickness || !filters.thickness.includes(p.thickness)) return false;
    }

    // Discount %
    if (filters.minDiscount && p.discount < filters.minDiscount) return false;

    // Tag / Need
    if (filters.tag) {
      if (!p.tags.includes(filters.tag)) return false;
    }

    // Collection
    if (filters.collection) {
      if (filters.collection === 'sleep' && p.category !== 'mattress' && p.category !== 'pillow') return false;
      if (filters.collection === 'bedroom' && p.category !== 'bed' && p.category !== 'accessory') return false;
      if (filters.collection === 'window' && p.category !== 'curtain') return false;
    }

    return true;
  });
}

export function sortProducts(list: Product[], key: string): Product[] {
  const sorted = [...list];
  switch (key) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case 'discount':
      return sorted.sort((a, b) => b.discount - a.discount);
    case 'relevance':
    default:
      return sorted;
  }
}
