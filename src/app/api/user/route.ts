import prisma from "@/app/_utils/db";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const tasks = await prisma.user.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error fetching tasks" }, { status: 500 });
  }
}

/*

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newTask = await prisma.user.create({
      data: body,
    });
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error creating tasks" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
      const data = await req.json();
  
      const updatedTask = await prisma.user.update({
        where: { id },
        data: data,
      });
  
      return NextResponse.json(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
      return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
    }
  }
  
  export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = params.id;
  
      await prisma.user.delete({
        where: { id },
      });
  
      return NextResponse.json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error deleting task:", error);
      return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
    }
  }

*/