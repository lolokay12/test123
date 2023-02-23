const { PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
  let member = args[0];
  const modRole = message.guild.roles.cache.find(
    (role) => role.name === "Owner"
  );
  if (!modRole) return console.log("The Mods role does not exist");

  if (!message.member.roles.cache.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0 && !member)
    return message.reply("Please mention a user to ban");

  if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
    return message.reply("");

  const banMember = member ? member : message.mentions.members.first().id;

  message.guild.members.unban(banMember).then((user) => {
    message.channel.send(`<@${user.id}> was succesfully UnBanned. `);
  });
};
