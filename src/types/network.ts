export type TransitTier = 'next' | '2d' | '3d' | '4d';

export interface NetworkCity {
  name: string;
  tier: TransitTier;
  lat: number;
  lon: number;
  major?: boolean;
  labelDx?: number;
  labelDy?: number;
  anchor?: 'start' | 'middle' | 'end';
}