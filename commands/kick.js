const { PermissionsBitField } = require("discord.js");

exports.run = (client, message, args) => {
  let kickReason = args.slice(1).join(" ");
  const modRole = message.guild.roles.cache.find(
    (role) => role.name === "Owner"
  );
  if (!modRole) return console.log("The Mods role does not exist");

  if (!message.member.roles.cache.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
    return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(kickReason).then((member) => {
    message.reply(
      `<@${member.user.id}> was succesfully kicked. For **\`${kickReason}\`** `
    );
  });
};
