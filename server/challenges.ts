import prisma from "@/utils/db";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const challengesRoute = router({
  getAllChallenges: publicProcedure.query(async() => {
    const challenges = await prisma.challenges.findMany({
      orderBy: {
      title: 'asc'
    }});
    return challenges;
  }),
  get5Challenges: publicProcedure.query(async () => {
    const challenges = await prisma.challenges.findMany({
      take: 5,
      orderBy: {
        title: 'asc'
      }
    });
    return challenges;
  }),
  getChallengeByID: publicProcedure
    .input(z.object({ challengeID: z.string() }))
    .query(async (opts) => {
      const { input } = opts;
      const challenge = await prisma.challenges.findUnique({
        where: { id: input.challengeID }
      })
      return challenge;
    }),
})