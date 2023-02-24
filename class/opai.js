import ChatGPT from "chatgpt-official";
import dotenv from "dotenv";
dotenv.config();

const options = {
  temperature: 0.7, // OpenAI parameter
  max_tokens: 256, // OpenAI parameter [Max response size by tokens]
  top_p: 1, // OpenAI parameter
  frequency_penalty: 0, // OpenAI parameter
  presence_penalty: 0, // OpenAI parameter
  instructions: `You are ChatGPT, a large language model trained by OpenAI.`, // initial instructions for the bot
  model: "text-davinci-003", // OpenAI parameter  `text-davinci-003` is PAID
  stop: "<|im_end|>", // OpenAI parameter
};

const chatGpt = new ChatGPT(process.env.openAiApipKey, options);

export default class Opai {
  constructor() {}

  async ask(prompt, conversationId) {
    prompt = prompt.trim();

    const result = await chatGpt.ask(prompt, conversationId);

    return result;
  }
}
