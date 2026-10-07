export interface RollingDoorProduct {
  id: string;
  name: string;
  category: 'otomatis' | 'onesheet' | 'perforated' | 'aluminium' | 'servis';
  tagline: string;
  pricePerMeter: number;
  priceDisplay: string;
  image: string;
  description: string;
  bestFor: string;
  thicknessOptions: string[];
  specs: {
    material: string;
    thickness: string;
    maxDimension: string;
    motorOptions?: string;
    lockingSystem: string;
    warranty: string;
    finishColor: string;
  };
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  sector: 'gudang' | 'mall' | 'ruko' | 'residensial';
  location: string;
  type: string;
  dimension: string;
  motorType: string;
  completionTime: string;
  image: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'harga' | 'teknis' | 'garansi' | 'servis';
}

export interface CalculationResult {
  width: number;
  height: number;
  effectiveArea: number;
  basePricePerMeter: number;
  materialCost: number;
  motorCost: number;
  sensorCost: number;
  chainBlockCost: number;
  installationCost: number;
  totalEstimated: number;
  productionTimeDays: string;
}

export interface LeadFormData {
  fullName: string;
  whatsappNumber: string;
  projectCity: string;
  serviceType: string;
  estimatedWidth: string;
  estimatedHeight: string;
  doorType: string;
  urgency: string;
  notes: string;
}
