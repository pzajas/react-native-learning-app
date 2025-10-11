export interface SummaryStat {
  value: number;
  label: string;
}

export interface StreakInfo {
  days: number;
  message: string;
}

export interface ProgressPoint {
  label: string;
  value: number; // 0..1 normalized height
  highlight?: boolean;
}
