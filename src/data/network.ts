import type { NetworkCity, TransitTier } from '../types/network';

export const hubCity = { name: 'Nagpur', lat: 21.15, lon: 79.09 };

export const transitTiers: {id: TransitTier;label: string;}[] = [
{ id: 'next', label: 'Next Day' },
{ id: '2d', label: '2 Days' },
{ id: '3d', label: '3 Days' },
{ id: '4d', label: '4 Days' }];


export const networkCities: NetworkCity[] = [
{ name: 'Gondia', tier: 'next', lat: 21.46, lon: 80.2, major: true },
{ name: 'Tiroda', tier: 'next', lat: 21.41, lon: 79.93 },
{ name: 'Tumsar', tier: 'next', lat: 21.38, lon: 79.74 },
{ name: 'Bhandara', tier: 'next', lat: 21.17, lon: 79.65 },
{ name: 'Sakoli', tier: 'next', lat: 21.08, lon: 79.98 },
{ name: 'Umred', tier: 'next', lat: 20.85, lon: 79.33 },
{ name: 'Nagbhid', tier: 'next', lat: 20.58, lon: 79.69 },
{ name: 'Bhivapur', tier: 'next', lat: 20.83, lon: 79.5 },
{ name: 'Bramhapuri', tier: 'next', lat: 20.61, lon: 79.86 },
{ name: 'Gadchiroli', tier: 'next', lat: 20.18, lon: 80.0, major: true },
{ name: 'Hinganghat', tier: 'next', lat: 20.55, lon: 78.84 },
{ name: 'Wani', tier: 'next', lat: 20.06, lon: 78.95 },
{ name: 'Bhadrawati', tier: 'next', lat: 20.11, lon: 79.12 },
{ name: 'Warora', tier: 'next', lat: 20.23, lon: 79.0 },
{ name: 'Chandrapur', tier: 'next', lat: 19.96, lon: 79.3, major: true },
{ name: 'Wardha', tier: 'next', lat: 20.74, lon: 78.6, major: true, labelDy: 18, labelDx: -4, anchor: 'middle' },
{ name: 'Yavatmal', tier: 'next', lat: 20.39, lon: 78.12, major: true, labelDx: -10, anchor: 'end' },
{ name: 'Katol', tier: 'next', lat: 21.27, lon: 78.59 },
{ name: 'Saoner', tier: 'next', lat: 21.39, lon: 78.92 },
{ name: 'Warud', tier: 'next', lat: 21.47, lon: 78.27 },
{ name: 'Amravati', tier: 'next', lat: 20.93, lon: 77.75, major: true, labelDy: -12, labelDx: 0, anchor: 'middle' },
{ name: 'Akot', tier: 'next', lat: 21.1, lon: 77.06 },
{ name: 'Akola', tier: 'next', lat: 20.7, lon: 77.0, major: true, labelDx: -10, anchor: 'end' },
{ name: 'Murtizapur', tier: 'next', lat: 20.73, lon: 77.37 },

{ name: 'Shegaon', tier: '2d', lat: 20.79, lon: 76.7, labelDx: 0, labelDy: -12, anchor: 'middle' },
{ name: 'Khamgaon', tier: '2d', lat: 20.71, lon: 76.57, labelDx: 10, labelDy: 16 },
{ name: 'Washim', tier: '2d', lat: 20.11, lon: 77.13 },
{ name: 'Buldhana', tier: '2d', lat: 20.53, lon: 76.18, labelDx: -10, anchor: 'end' },

{ name: 'Jalna', tier: '3d', lat: 19.84, lon: 75.88 },
{ name: 'Jalgaon', tier: '3d', lat: 21.0, lon: 75.56 },
{ name: 'Nashik', tier: '3d', lat: 20.0, lon: 73.79 },
{ name: 'Thane', tier: '3d', lat: 19.22, lon: 72.98, labelDx: 10, labelDy: 16 },
{ name: 'Bhiwandi', tier: '3d', lat: 19.3, lon: 73.06, labelDx: 10, labelDy: -4 },
{ name: 'Aurangabad', tier: '3d', lat: 19.88, lon: 75.34, labelDx: -10, anchor: 'end' },

{ name: 'Kalyan', tier: '4d', lat: 19.24, lon: 73.13 },
{ name: 'Vasai', tier: '4d', lat: 19.39, lon: 72.84, labelDx: -10, anchor: 'end' },
{ name: 'Pune', tier: '4d', lat: 18.52, lon: 73.86 }];