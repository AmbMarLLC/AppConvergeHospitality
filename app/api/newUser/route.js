import { prisma } from "@lib/prisma";

export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      username,
      password,
      property,
      propertyAddress,
      propertyCode,
      position,
    } = await request.json();

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        username,
        password,
        property,
        propertyAddress,
        propertyCode,
        position,
        active: true,
      },
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response("Failed to create user", { status: 500 });
  }
}
