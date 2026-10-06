export const MAP_WIDTH = 1000;
export const MAP_HEIGHT = 440;
const SCALE = 118;
const MIN_LON = 72.3;
const MAX_LAT = 21.9;
export function project(lat, lon) {
    return { x: (lon - MIN_LON) * SCALE, y: (MAX_LAT - lat) * SCALE };
}
export function arcPath(a, b) {
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.hypot(dx, dy) || 1;
    const bend = Math.min(dist * 0.18, 90);
    const cx = mx + -dy / dist * bend;
    const cy = my + dx / dist * bend - bend * 0.4;
    return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}
