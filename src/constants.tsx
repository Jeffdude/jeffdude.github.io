export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type UISize = {
  xs: Number,
  sm?: Number,
  md?: Number,
  lg?: Number,
  xl?: Number,
}

export const headerHeight: UISize = {
  xs: 50,
  md: 70,
} 