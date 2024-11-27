import { PrismaClient } from "@prisma/client";

globalThis.prisma ||= new PrismaClient()

export const prisma = globalThis.prisma as PrismaClient

