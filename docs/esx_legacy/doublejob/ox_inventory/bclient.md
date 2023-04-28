---
sidebar_position: 1
---

# modules/bridge/esx/client.lua

Add/Refresh les `factions` au `groups`

- <p><u>Trouvez l'écoute de l'event : <code>AddEventHandler('esx:setPlayerData', function(key, value)</code>, et remplacez le entièrement par celui-ci :</u></p>

```lua
AddEventHandler('esx:setPlayerData', function(key, value)
	if not PlayerData.loaded or GetInvokingResource() ~= 'es_extended' then return end

	if key == 'job' then
		key = 'groups'
		value = { [value.name] = value.grade }
	elseif key == 'faction' then
		key = 'groups'
		value = { [value.name] = value.grade }
	end

	PlayerData[key] = value
	OnPlayerData(key, value)
end)
```