export const componentSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export type ComponentSize = typeof componentSizes[number];
