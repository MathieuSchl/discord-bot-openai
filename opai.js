const { Configuration, OpenAIApi } = require("openai");
const config = require("./config.json");

const configuration = new Configuration({
  apiKey: config.openAiApipKey,
});
const openai = new OpenAIApi(configuration);

module.exports.createCompletion = async (prompt, nickname) => {
  prompt = prompt.trim();
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt.length !== 0 ? prompt : `Hello${nickname ? `, my nickname is ${nickname}` : ""}`,
    max_tokens: 500,
  });

  const result = completion.data.choices[0].text;

  return result;
};
