import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // For production, integrate with an email service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // Example with Resend (uncomment and add RESEND_API_KEY to env):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'OUTURE Contact <contact@outure.co>',
    //   to: 'victor.kiani@outure.co',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    // For now, log the submission (in production, send email)
    console.log('Contact form submission:', { name, email, company, message })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
