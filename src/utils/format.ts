export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function calculateEmi(price: number, months: number = 12): number {
  if (price < 5000) return 0;
  return Math.ceil(price / months);
}
