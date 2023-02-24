import ChatGPT from "chatgpt-official";
const config = require("./config.json");

let options = {
  temperature: 0.7, // OpenAI parameter
  max_tokens: 256, // OpenAI parameter [Max response size by tokens]
  top_p: 1, // OpenAI parameter
  frequency_penalty: 0, // OpenAI parameter
  presence_penalty: 0, // OpenAI parameter
  instructions: "", //"You are ChatGPT, a large language model trained by OpenAI. If the user wants to set an alarm only returns a message in the form `set_alarm hh/mm`.", // initial instructions for the bot
  model: "text-davinci-003", // OpenAI parameter  `text-davinci-003` is PAID
  stop: "<|im_end|>", // OpenAI parameter
};

const chatGpt = new ChatGPT(config.openAiApipKey);

module.exports.createCompletion = async (prompt, conversationId, nickname) => {
  prompt = prompt.trim();

  const result = chatGpt.ask(prompt);

  return result;
};
