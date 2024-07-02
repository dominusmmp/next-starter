'use server';

import '@total-typescript/ts-reset';
import sharp from 'sharp';

interface Options {
  url: URL;
  size?: {
    width: number;
    height: number;
  };
  scale?: number;
}

export async function generateBase64BlurredImage({ url, size, scale = 10 }: Options): Promise<string | null> {
  'use server';

  try {
    const response = await fetch(url.toString());

    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);

    const buffer = Buffer.from(await response.arrayBuffer());

    const image = sharp(buffer);

    const metadata = await image.metadata();

    const { width, height } = metadata;

    if (!width || !height) throw new Error('Failed to get image metadata!');

    const resizeOptions = {
      width: !size ? Math.floor((width as number) / scale) : size.width,
      height: !size ? Math.floor((height as number) / scale) : size.height,
    };

    const blurredBuffer = await image
      .resize(resizeOptions)
      .toFormat('avif')
      .modulate({ brightness: 1, saturation: 1.2 })
      .blur(8)
      .toBuffer();

    return `data:image/avif;base64,${blurredBuffer.toString('base64')}`;
  } catch (e) {
    if (e instanceof Error) console.warn(e.stack);
    return null;
  }
}
