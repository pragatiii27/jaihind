import { Product, ComfortAnswers, RecommenderMatch } from '../types/product';

export function calculateMatches(
  products: Product[],
  answers: ComfortAnswers
): RecommenderMatch[] {
  const scored = products.map((product) => {
    let earned = 0;
    let possible = 0;
    const reasons: string[] = [];

    // 1. Firmness (Weight 30)
    if (answers.firmness) {
      possible += 30;
      const f = product.firmness || 'Medium';
      if (f === answers.firmness) {
        earned += 30;
        reasons.push(`Matches your preferred ${f.toLowerCase()} firmness`);
      } else if (
        (answers.firmness === 'Soft' && f === 'Medium') ||
        (answers.firmness === 'Medium' && (f === 'Soft' || f === 'Medium Firm')) ||
        (answers.firmness === 'Firm' && f === 'Medium Firm')
      ) {
        earned += 18;
        reasons.push(`Comfortable firmness option close to your choice`);
      }
    }

    // 2. Size (Weight 20)
    if (answers.size) {
      possible += 20;
      if (answers.size === 'Custom') {
        if (product.size.includes('Custom') || product.size.length > 0) {
          earned += 12;
          reasons.push('Available with custom dimensions request');
        }
      } else if (product.size.includes(answers.size)) {
        earned += 20;
        reasons.push(`Available in standard ${answers.size} size`);
      }
    }

    // 3. Material (Weight 20)
    if (answers.material) {
      possible += 20;
      if (product.material.toLowerCase().includes(answers.material.toLowerCase())) {
        earned += 20;
        reasons.push(`Made with premium ${answers.material}`);
      } else if (
        answers.material === 'Hybrid' &&
        (product.material.includes('Memory Foam') || product.material.includes('Spring'))
      ) {
        earned += 8;
        reasons.push('Multi-layer supportive foam construction');
      }
    }

    // 4. Thickness (Weight 10)
    if (answers.thickness) {
      possible += 10;
      if (product.thickness === answers.thickness) {
        earned += 10;
        reasons.push(`Exact ${answers.thickness}" height profile`);
      } else if (product.thickness && Math.abs(product.thickness - answers.thickness) <= 2) {
        earned += 5;
        reasons.push(`Optimal height profile (${product.thickness}" thickness)`);
      }
    }

    // 5. Comfort preference (Weight 10)
    if (answers.comfort) {
      possible += 10;
      if (answers.comfort === 'Cooling' && product.tags.includes('cooling')) {
        earned += 10;
        reasons.push('Built-in advanced cooling gel technology');
      } else if (
        answers.comfort === 'Supportive' &&
        (product.firmness === 'Firm' || product.firmness === 'Medium Firm')
      ) {
        earned += 10;
        reasons.push('Enhanced spinal alignment & orthopedic support');
      } else if (answers.comfort === 'Soft' && (product.firmness === 'Soft' || product.firmness === 'Medium')) {
        earned += 10;
        reasons.push('Plush pressure-relieving cloud comfort');
      } else if (answers.comfort === 'Balanced') {
        earned += 10;
        reasons.push('Ideal balance of cushion and core support');
      } else {
        earned += 4;
      }
    }

    // 6. Sleeping Position (Weight 10)
    if (answers.position) {
      possible += 10;
      const f = product.firmness || 'Medium';
      if (
        (answers.position === 'Side' && (f === 'Soft' || f === 'Medium')) ||
        (answers.position === 'Back' && (f === 'Medium Firm' || f === 'Firm')) ||
        (answers.position === 'Stomach' && f === 'Firm') ||
        (answers.position === 'Combination' && (f === 'Medium' || f === 'Medium Firm'))
      ) {
        earned += 10;
        reasons.push(`Ergonomically contoured for ${answers.position.toLowerCase()} sleepers`);
      } else {
        earned += 5;
      }
    }

    // Default possible if nothing answered
    if (possible === 0) possible = 100;

    let rawScore = Math.round((earned / possible) * 100);
    if (possible === 100 && earned === 0) rawScore = 60;
    // Clamp score between 55 and 98
    const score = Math.min(98, Math.max(55, rawScore));

    // Ensure reasons has at least 2 items
    if (reasons.length === 0) {
      reasons.push('High customer rating & satisfaction');
      reasons.push(`Includes ${product.warranty} warranty and ${product.trial || '100-night'} trial`);
    }

    return {
      product,
      score,
      reasons: reasons.slice(0, 4)
    };
  });

  // Sort by score desc, broken by rating desc, then discount desc
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.product.rating !== a.product.rating) return b.product.rating - a.product.rating;
    return b.product.discount - a.product.discount;
  });

  return scored.slice(0, 3);
}
