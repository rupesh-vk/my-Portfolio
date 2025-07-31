import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

// Define the shape of the request body
type RequestBody = {
  name: string;
  email: string;
  message: string;
};

// The API handler function
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  // Ensure this is a POST request
  if (req.method === "POST") {
    // Extract the name, email, and message from the request body
    const { name, email, message }: RequestBody = req.body;

    // Log the incoming request data to check if it's coming through
    console.log("Received form data:", { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name, email, message });
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create the transporter object using SMTP transport (for Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",  // Gmail SMTP service
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your Gmail password or App Password
      },
    });

    // Setup email options
    const mailOptions = {
      from: email,  // Sender's email (the one entered in the form)
      to: process.env.RECIPIENT_EMAIL,  // The recipient's email (your email or someone else’s)
      subject: `New Message from ${name}`,  // Email subject
      text: `Message from: ${name} (${email})\n\n${message}`,  // Email body
    };

    try {
      // Log that we're trying to send the email
      console.log("Sending email...");
      
      // Send the email
      await transporter.sendMail(mailOptions);

      // Log success
      console.log("Email sent successfully!");
      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      // Log the full error if the email fails to send
      console.error("Error sending email:", error);

      // Return error response to the client
      return res.status(500).json({ error: "Error sending email. Please try again." });
    }
  } else {
    // Return error for unsupported HTTP methods
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}


