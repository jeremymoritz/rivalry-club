import { snakeCase } from 'lodash';

import { Game } from '../API';

export const s3Bucket = 'https://rivalry-club.s3.amazonaws.com';

export const s3Images = `${s3Bucket}/images`;

export const s3Logos = `${s3Images}/logos`;
export const s3Favicons = `${s3Images}/favicons`;
export const s3Fighters = `${s3Images}/fighters`;

export function gameLogoSource(game: Game): string {
  return `${s3Logos}/${snakeCase(game.name).replace(/\W/g, '')}.png`;
}
