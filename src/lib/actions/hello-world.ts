'use server';

interface HelloWorldOptions {
  name: string;
}

export async function helloWorld({ name = '' }: HelloWorldOptions): Promise<string | null> {
  'use server';

  try {
    const response = `Hello, ${name}! This is a sample action.`;
    return response;
  } catch (e) {
    if (e instanceof Error) console.warn(e.stack);
    return null;
  }
}
