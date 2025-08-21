import { THouses } from '@/app/types';
import { Houses, Traits } from '../data/constants';

/**
 * Перевести название факультета.
 * @param {string} house - Название факультета на английском.
 * @returns {string} - Название факультета на русском.
 */
export function translateHouse(house: THouses): string {
  return Houses[house as keyof typeof Houses];
}
