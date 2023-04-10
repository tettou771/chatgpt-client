import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface ChatRequestData {
  message: string;
}

interface ChatResponseData {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponseData | { error: string }>
) {
  if (req.method === 'POST') {
    const { message } = req.body as ChatRequestData;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [ 
              {
                role: 'user',
                content: `${message}`
              }
            ],
          model: 'gpt-3.5-turbo',
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CHATGPT_API_KEY}`,
          },
        }
      );

      const chatGPTResponse = response.data.choices[0].message.content.trim();
      res.status(200).json({ message: chatGPTResponse });
    } 
    catch (error) {
      console.error('Error interacting with ChatGPT API:', error); // エラー情報を出力
      res.status(500).json({ error: 'Error interacting with ChatGPT API.' });
    }
    


  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
