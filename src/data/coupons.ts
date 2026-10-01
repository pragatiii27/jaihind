import { Coupon } from '../types/product';

export const coupons: Coupon[] = [
  {
    code: 'JAIHIND500',
    benefit: '₹500 OFF',
    discountType: 'amount',
    value: 500,
    minOrder: 3000,
    expiry: '31 Dec 2026',
    appliesTo: 'All products'
  },
  {
    code: 'COMFORT10',
    benefit: '10% OFF',
    discountType: 'percentage',
    value: 10,
    maxDiscount: 2500,
    minOrder: 8000,
    expiry: '30 Nov 2026',
    appliesTo: 'Mattresses, pillows, accessories'
  },
  {
    code: 'NEWHOME15',
    benefit: '15% OFF',
    discountType: 'percentage',
    value: 15,
    maxDiscount: 6000,
    minOrder: 20000,
    expiry: '31 Dec 2026',
    appliesTo: 'Beds, mattresses, curtains'
  },
  {
    code: 'SLEEP1000',
    benefit: '₹1,000 OFF',
    discountType: 'amount',
    value: 1000,
    minOrder: 15000,
    expiry: '15 Dec 2026',
    appliesTo: 'Mattresses only'
  }
];
