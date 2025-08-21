import { houses } from '../data/constants';

/**
 * Перевести название факультета.
 * @param {string} house - Название факультета на английском.
 * @returns {string} - Название факультета на русском.
 */
export function translateHouse(house: string): string {
  return houses[house as keyof typeof houses];
}
