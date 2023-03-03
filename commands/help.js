import Commands from "../class/commands.js";
import { ApplicationCommandOptionType } from "discord.js";

export default function help(client) {
  const name = "help";
  const description = "Get help";
  const options = [
    {
      name: "language",
      description: "Select language for help",
      type: ApplicationCommandOptionType.String,
      required: false,
      choices: [
        {
          name: "English",
          value: "en",
        },
        {
          name: "Francais",
          value: "fr",
        },
        {
          name: "Deutsch",
          value: "de",
        },
        {
          name: "Español",
          value: "es",
        },
        {
          name: "Italiano",
          value: "it",
        },
        {
          name: "Português",
          value: "pt",
        },
      ],
    },
  ];
  const run = async (interaction) => {
    await interaction.deferReply({ ephemeral: true });
    const optionLanguage = interaction.options.get("language");
    const language = optionLanguage ? optionLanguage.value : "en";

    let description = "";
    switch (language) {
      case "fr":
        description = `Bonjour, je suis ${interaction.client.user}, le bot discord qui marche avec l'algorithme d'intelligence artificielle d'open-ai. Pour utiliser mes fonctionnalités, vous pouvez me poser des questions soit en message privé ou soit avec un ping dans des channels en début ou en fin de message (ex: ${interaction.client.user} Quel est la météo à Paris ?)`;
        break;
      case "de":
        description = `Hallo, ich bin ${interaction.client.user}, der Discord-Bot, der mit dem KI-Algorithmus von open-ai arbeitet. Um meine Funktionen zu nutzen, können Sie mir entweder per Privatnachricht oder mit einem Ping in Channels am Anfang oder Ende einer Nachricht Fragen stellen (z.B.: ${interaction.client.user} Wie ist das Wetter in Paris?).`;
        break;
      case "es":
        description = `Hola, soy ${interaction.client.user}, el bot de discordia que funciona con el algoritmo de inteligencia artificial open-ai. Para utilizar mis funciones, puedes hacerme preguntas por mensaje privado o con un ping en los canales al principio o al final del mensaje (p. ej.: ${interaction.client.user} ¿Qué tiempo hace en París?).`;
        break;
      case "it":
        description = `Ciao, sono ${interaction.client.user}, il bot di discord che funziona con l'algoritmo di intelligenza artificiale open-ai. Per utilizzare le mie funzioni, potete farmi delle domande in un messaggio privato o con un ping nei canali all'inizio o alla fine del messaggio (ad esempio: ${interaction.client.user} che tempo fa a Parigi?)`;
        break;
      case "pt":
        description = `Olá, eu sou ${interacção.client.user}, o robô discordante que funciona com o algoritmo de inteligência artificial open-ai. Para utilizar as minhas funcionalidades, pode fazer-me perguntas em mensagem privada ou com um ping nos canais no início ou no fim da mensagem (por exemplo: ${interacção.client.user} Qual é o tempo em Paris?)`;
        break;

      default:
        description = `Hello, I'm ${interaction.client.user}, the discord bot that works with the open-ai artificial intelligence algorithm. To use my features, you can ask me questions either in private message or with a ping in channels at the beginning or at the end of the message (e.g.: ${interaction.client.user} What is the weather in Paris?)`;
        break;
    }
    await interaction.editReply({
      embeds: [{ title: interaction.client.user.username, description, color: 0x0099ff }],
    });
  };
  const helpCommand = new Commands({ client, name, description, options, run });

  return helpCommand;
}
