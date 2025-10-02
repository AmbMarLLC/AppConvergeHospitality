import { del } from "@vercel/blob";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // make sure you have a prisma client instance exported

export async function DELETE(req) {
  try {
    const { url, id } = await req.json();

    if (!url || !id) {
      return NextResponse.json(
        { error: "File URL and ID required" },
        { status: 400 }
      );
    }

    // 1. Delete from Vercel Blob
    await del(url);

    // 2. Delete from Prisma/Postgres
    await prisma.fileData.delete({
      where: { id: id }, // assumes `id` is the PK
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Delete error:", err);
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 500 }
    );
  }
}
