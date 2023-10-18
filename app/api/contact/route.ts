import nodemailer from 'nodemailer'
import { NextApiResponse } from "next";
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest, res: NextApiResponse) {
  const data = await new Response(req.body).json()
  console.log(data);

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
      replyTo: data.email,
      subject: `Contact form submition from ${data.name}`,
      html: `
      <p>${data.message}</p>
      `,
    })

    return new Response(JSON.stringify({message: 'success'}))
    
  } catch (error) {
    console.log(error)
    return res.status(500).send({message: 'failed'})
  }
}