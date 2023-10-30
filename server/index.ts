import { publicProcedure, router } from "./trpc";
import { z } from 'zod';
import nodemailer from 'nodemailer';


export const appRouter = router({
  contactSubmit: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string(),
      message: z.string(),
    }))
    .mutation(async (req) => {
      const { input } = req;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      try {
        const mail = await transporter.sendMail({
          from: process.env.EMAIL_ID,
          to: "asokankamalesh@gmail.com",
          replyTo: input.email,
          subject: `Contact form submission from ${input.name}`,
          html: `
          <p>${input.message}</p>
          `,
        })
        return { status: 'success' };
      } catch (error) {
        return { status: 'fail' };
      }
    }),
});

export type AppRouter = typeof appRouter;