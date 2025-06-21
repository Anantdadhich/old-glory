import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      process.env.GOOGLE_SCRIPT_URL!,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );

    
    let result;
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      result = await response.json();
    } else {
      const text = await response.text();
      result = { result: 'success', message: text };
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { result: 'error', message: error.message },
      { status: 500 }
    );
  }
}
