import { NextRequest, NextResponse } from "next/server";
import zod from "zod"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest){
    const body = await req.json();
    
    const post = await prisma.blog.create({
        data:{
            authorId: body.authorId,
            content: body.content,
            title: body.title,
            thumbnail: body.thumbnail,
            topic: body.topic
        }
    })
    return NextResponse.json(post);
}
export async function GET(request: NextRequest){
    const posts = await prisma.blog.findMany({
        where:{
            authorId: 1 
        }
    })
    return NextResponse.json(posts);
}
export function PUT(request: any){
    
}
//postgres://avnadmin:AVNS_kqm0qUYDJEfRx22JlTk@pg-28ea5e11artical-itsyash9211-bde1.l.aivencloud.com:17594/defaultdb?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiODE1YTU5ZDctZTkyNC00ZWRmLWEwN2QtMjJkYTFjNWJmOTU3IiwidGVuYW50X2lkIjoiZGVhNzVmZTZiZDQyNmRkMzExNDk1NGNlZDVjNTVhMjMyYzhlOWEzZWRhNWUyNDlkZWZjYTNiYzMzODViMDE0NSIsImludGVybmFsX3NlY3JldCI6ImQ0MzVmMzI5LTc5YWUtNGFjNi1iYjRlLTZjN2E3MzNjMjM0ZSJ9.s1kbW1fFI3kjGBg2LZMu8zbgLKrccDxILLhpQV0wu0E"