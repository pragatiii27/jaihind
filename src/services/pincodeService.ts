export interface PincodeResult {
  deliverable: boolean;
  estimateDays: number;
  deliveryFee: number;
  message: string;
}

export interface PincodeService {
  checkPincode(pincode: string): Promise<PincodeResult>;
}

export class MockPincodeService implements PincodeService {
  async checkPincode(pincode: string): Promise<PincodeResult> {
    const trimmed = pincode.trim();
    if (!/^\d{6}$/.test(trimmed)) {
      throw new Error('Enter a valid 6-digit pincode');
    }

    if (trimmed === '000000') {
      return {
        deliverable: false,
        estimateDays: 0,
        deliveryFee: 0,
        message: "Sorry, we don't deliver here yet."
      };
    }

    const today = new Date();

    if (trimmed.startsWith('42') || trimmed.startsWith('41') || trimmed.startsWith('40')) {
      const estDate = new Date(today.setDate(today.getDate() + 3));
      const dateStr = estDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      return {
        deliverable: true,
        estimateDays: 3,
        deliveryFee: 0,
        message: `Delivery by ${dateStr} · Free`
      };
    } else {
      const estDate = new Date(today.setDate(today.getDate() + 6));
      const dateStr = estDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      return {
        deliverable: true,
        estimateDays: 6,
        deliveryFee: 499,
        message: `Delivery by ${dateStr} · ₹499`
      };
    }
  }
}
