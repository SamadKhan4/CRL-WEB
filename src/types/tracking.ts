export interface ShipmentStatus {
  lrNumber: string;
  origin: string;
  destination: string;
  currentStatus: string;
  stage: number;
  expectedDelivery: string;
  podStatus: string;
  isDemo: boolean;
}

export type TrackingState =
{status: 'idle';} |
{status: 'loading';} |
{status: 'error';error: string;} |
{status: 'success';data: ShipmentStatus;};