exports.run = (client, message, args) => {
  console.log(args.slice(2));
  message.channel.send(`Pong okay!`);
};
