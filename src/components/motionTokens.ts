/* Shared motion language — mirrors --ease-fluid in index.css so CSS and JS motion feel like one system. */
export const EASE_FLUID = [0.16, 1, 0.3, 1] as const;
export const SPRING_SOFT = { type: 'spring', stiffness: 110, damping: 20, mass: 0.9 } as const;
export const SPRING_SNAPPY = { type: 'spring', stiffness: 380, damping: 32 } as const;
