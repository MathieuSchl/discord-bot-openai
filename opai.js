const { Configuration, OpenAIApi } = require("openai");
const config = require("./config.json");

const configuration = new Configuration({
  apiKey: config.openAiApipKey,
});
const openai = new OpenAIApi(configuration);

module.exports.createCompletion = async (prompt) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
  });

  const result = completion.data.choices[0].text;

  return result;
};
