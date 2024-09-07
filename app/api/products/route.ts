import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // 
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        // 
        const todos = await response.json();
        // Return the todos in the API response
        return NextResponse.json({
            data: todos
        });
    } catch (error) {
        // Handle any errors that occur during fetch or JSON parsing
        return NextResponse.json({
            error: 'Internal Server Error'
        }, { status: 500 });
    }
}
