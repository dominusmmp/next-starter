export function delay(ms: number, attempts = 1): Promise<void> {
  if (attempts > 1) ms *= attempts;
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const sleep = delay;
