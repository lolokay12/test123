const { PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
  let muteReason = args.slice(2).join(" ");
  let time = args[1];
  const modRole = message.guild.roles.cache.find(
    (role) => role.name === "Owner"
  );
  if (!modRole) return console.log("The Mods role does not exist");

  if (!message.member.roles.cache.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to Mute.");

  if (!message.member.permissions.has(PermissionsBitField.Flags.MuteMembers))
    return message.reply("");

  const muteMember = message.mentions.members.first();

  muteMember
    .disableCommunicationUntil(Date.now() + time * 60 * 1000, muteReason)
    .then((user) => {
      message.channel.send(
        `<@${user.id}> was succesfully Timed Out for ${time} Minutes. **Reason:** *${muteReason}* `
      );
    });
};
