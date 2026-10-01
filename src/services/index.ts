import { MockProductService, ProductService } from './productService';
import { MockRoomAnalysisService, RoomAnalysisService } from './roomAnalysisService';
import { MockPincodeService, PincodeService } from './pincodeService';

export const productService: ProductService = new MockProductService();
export const roomAnalysisService: RoomAnalysisService = new MockRoomAnalysisService();
export const pincodeService: PincodeService = new MockPincodeService();

export * from './productService';
export * from './roomAnalysisService';
export * from './pincodeService';
