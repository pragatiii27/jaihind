export interface RoomAnalysis {
  palette: { name: string; hex: string }[];
  style: string;
  furniture: string[];
  mood: string;
  recommendations: {
    curtains: string[];
    pillows: string[];
    beds: string[];
    accessories: string[];
  };
}

export interface RoomAnalysisService {
  analyse(file: File | string): Promise<RoomAnalysis>;
}

export class MockRoomAnalysisService implements RoomAnalysisService {
  private sampleResults: RoomAnalysis[] = [
    {
      palette: [
        { name: 'Warm Terracotta', hex: '#B5654A' },
        { name: 'Oatmeal Beige', hex: '#EFEAE2' },
        { name: 'Charcoal Accent', hex: '#1D1C19' },
        { name: 'Sage Leaf', hex: '#8A9A86' }
      ],
      style: 'Modern Organic',
      furniture: ['Linen Sectional', 'Light Oak Coffee Table', 'Woven Rug'],
      mood: 'Calm & Warmly Welcoming',
      recommendations: {
        curtains: ['velvet-drape-curtain', 'sheer-linen-curtain'],
        pillows: ['ortho-contour-pillow', 'silk-plush-pillow'],
        beds: ['nordic-solid-wood-bed'],
        accessories: ['quilted-bed-protector', 'weighted-comfort-blanket']
      }
    },
    {
      palette: [
        { name: 'Deep Indigo', hex: '#2C3E50' },
        { name: 'Soft Cream', hex: '#F7F5F1' },
        { name: 'Warm Amber', hex: '#C08A2E' },
        { name: 'Natural Jute', hex: '#DDD8CF' }
      ],
      style: 'Minimalist Luxe',
      furniture: ['Leather Armchair', 'Walnut Sideboard', 'Minimalist Lamp'],
      mood: 'Restful & Serene',
      recommendations: {
        curtains: ['blackout-thermal-curtain', 'textured-cotton-curtain'],
        pillows: ['cooling-gel-pillow', 'ergonomic-cervical-pillow'],
        beds: ['upholstered-storage-bed'],
        accessories: ['bamboo-fitted-sheet-set', 'luxury-down-duvet']
      }
    },
    {
      palette: [
        { name: 'Earthy Clay', hex: '#6B4A3A' },
        { name: 'Warm Cream', hex: '#F1DFD6' },
        { name: 'Muted Olive', hex: '#5A6B5C' },
        { name: 'Sandstone', hex: '#E3EEE6' }
      ],
      style: 'Warm Scandinavian',
      furniture: ['Bouclé Sofa', 'Natural Birch Bedhead', 'Ceramic Vases'],
      mood: 'Cozy & Elevated',
      recommendations: {
        curtains: ['linen-blend-sheer-curtain', 'blackout-thermal-curtain'],
        pillows: ['latex-breathe-pillow', 'ortho-contour-pillow'],
        beds: ['platform-teak-bed'],
        accessories: ['silk-pillow-cover-pair', 'weighted-comfort-blanket']
      }
    }
  ];

  async analyse(file: File | string): Promise<RoomAnalysis> {
    // Simulate realistic AI network latency (2.2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 2200));

    let index = 0;
    if (typeof file === 'string') {
      index = file.length % 3;
    } else if (file && file.size) {
      index = file.size % 3;
    }
    return this.sampleResults[index];
  }
}
