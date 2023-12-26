import { NUMBER_SET, ALPHABET_SET } from './constants';

export function getRandomId(length: number): string {
  const characterSet = NUMBER_SET + ALPHABET_SET;

  let outputId = '';

  for (let i = 0; i < length; i++) {
    outputId += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
  }

  return outputId;
}
