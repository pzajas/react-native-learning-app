function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const srgb = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

export function pickTextColorForBg(bgHex: string) {
  const L = luminance(bgHex);
  return L > 0.5 ? '#000000' : '#ffffff';
}

function blendTowards(hex: string, targetHex: string, factor: number) {
  const c = hexToRgb(hex);
  const t = hexToRgb(targetHex);
  const r = Math.round(c.r + (t.r - c.r) * factor);
  const g = Math.round(c.g + (t.g - c.g) * factor);
  const b = Math.round(c.b + (t.b - c.b) * factor);
  return rgbToHex(r, g, b);
}

export function mapTileColorForScheme(hex: string, scheme: 'light' | 'dark' | string) {
  if (scheme !== 'dark') return hex;
  const L = luminance(hex);
  if (L > 0.85) return blendTowards(hex, '#000000', 0.95);
  if (L > 0.7) return blendTowards(hex, '#000000', 0.7);
  if (L > 0.5) return blendTowards(hex, '#000000', 0.45);
  return blendTowards(hex, '#000000', 0.2);
}

export default {
  hexToRgb,
  rgbToHex,
  luminance,
  pickTextColorForBg,
  mapTileColorForScheme,
};
