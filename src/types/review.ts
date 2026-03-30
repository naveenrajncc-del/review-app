export interface ReviewItem {
  line: number;
  comment: string;
  severity: 'error' | 'warning' | 'info';
}