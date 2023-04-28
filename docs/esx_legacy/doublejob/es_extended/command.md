---
sidebar_position: 5
---

# server/commands.lua

Creer votre commande pour vous setfaction dans la console/chat

- <p><u>Ajoutez cette fontion dans le fichier :</u></p>

```lua
ESX.RegisterCommand('setfaction', 'admin', function(xPlayer, args, showError)
	if ESX.DoesFactionExist(args.faction, args.grade) then
		args.playerId.setFaction(args.faction, args.grade)
	else
		showError("Commande setFaction Invalide")
	end
	ESX.DiscordLogFields("UserActions", "/setfaction Triggered", "pink", {
		{name = "Player", value = xPlayer.name, inline = true},
		{name = "Faction", value = args.faction, inline = true},
    {name = "Grade", value = args.grade, inline = true}
	})
end, true, {help = 'setfaction', validate = true, arguments = {
	{name = 'playerId', help = 'id', type = 'player'},
	{name = 'faction', help = 'name', type = 'string'},
	{name = 'grade', help = 'grade', type = 'number'}
}})
```