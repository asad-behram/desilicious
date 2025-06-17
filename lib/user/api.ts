import { CreateUser, IResponse } from "@/common/interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function signup({
  email,
  password,
  firstName,
  lastName,
}: CreateUser) {
  try {
    const newUser = await prisma.user.create({
      data: { email, password, firstName, lastName },
    });

    if (newUser) {
      const response: IResponse = {
        success: true,
        content: newUser,
      };
      return response;
    } else {
      const response: IResponse = {
        success: false,
      };
      return response;
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: "Unable to create user" };
  }
}

export async function findUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      const response: IResponse = {
        success: true,
        content: user,
      };
      return response;
    } else {
      const response: IResponse = {
        success: false,
      };
      return response;
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: "Unable to find user" };
  }
}
