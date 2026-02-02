import OpenAI from "openai";
import { OPENAI_KEY, OPENAI_KEY_NEW } from "./constants";
import { OpenRouter } from "@openrouter/sdk";

{
  /*
const client = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

*/
}

const client = new OpenRouter({
  apiKey: OPENAI_KEY_NEW, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3001", // or your site URL
    "X-Title": "Netflix GPT Clone", // any app name
  },
});

export default client;
