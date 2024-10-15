
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch'; // Ensure you have node-fetch installed

const app = express();
const PORT = 5000;

//const OPENAI_API_KEY = "your-openai-api-key"; // Replace with your OpenAI API key


const API_KEY = "sk-B9L8Oz0R6TvV1ynPY7D9GxIy8L5tRATIYRUhtDFgMKT3BlbkFJLY6Pucm8lCT-NkeN3MgGTvN1SGvzjzPB6QAixlVuMA";
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: prompt }
        ]
      }),
    });

    const data = await response.json();

    res.json({ bot: data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
