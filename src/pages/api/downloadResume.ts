// pages/api/downloadResume.ts

import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Define the path to your resume file (inside public directory)
    const resumePath = path.resolve('./public/resume.pdf');
try {
      // Use synchronous read to avoid issues in serverless functions
      const data = fs.readFileSync(resumePath);

      // Set response headers to trigger file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
      
      // Send the file data in the response
      res.send(data);
    } catch (error) {
      // Log and return an error if the file is not found or unreadable
      console.error('Error reading resume file:', error);
      return res.status(500).json({ error: 'Error reading the resume file' });
    }
  } else {
    // Handle unsupported HTTP methods (e.g., POST, PUT, DELETE)
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}