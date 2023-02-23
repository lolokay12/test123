const { PermissionsBitField } = require("discord.js");

exports.run = (client, message, args) => {
  let warnReason = args.slice(1).join(" ");
  const warnMember = message.mentions.members.first();
  const modRole = message.guild.roles.cache.find(
    (role) => role.name === "Owner"
  );
  if (!modRole) return console.log("The Mods role does not exist");

  if (!message.member.roles.cache.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to Warn");

  if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
    return message.reply("");

  message.channel.send(
    `<@${warnMember.id}> was succesfully Warned. **Reason:** *${warnReason}* `
  );
};
