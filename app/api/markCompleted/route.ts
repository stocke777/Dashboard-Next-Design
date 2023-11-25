import { NextRequest } from '@/node_modules/next/server';
import { NextResponse } from 'next/server';
import Todo from '@/utils/models/Todo.js'
import connectToDatabase from '@/utils/db.js'

export async function GET() {

    return NextResponse.json({ name: 'Anuj Singh' });
}

export async function POST(req: NextRequest, res) {

    const data = await req.json()
    console.log(data)
    await connectToDatabase();
    try {

        await connectToDatabase();

        const filter = { _id: data['id'] };
        const update = { completed: data['checked'] };
        await Todo.findOneAndUpdate(filter, update);

    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ name: 'Task deleted' });
}