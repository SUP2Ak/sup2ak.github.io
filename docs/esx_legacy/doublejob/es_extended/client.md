---
sidebar_position: 1
---

# client/main.lua

SetPlayerData faction

- <p><u>Trouvez cette event dans le fichier</u></p>

```lua
RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(Job)
	ESX.SetPlayerData('job', Job)
end)
```

- <p><u>Et ajouter celui-ci en dessous</u></p>

```lua
RegisterNetEvent('esx:setFaction')
AddEventHandler('esx:setFaction', function(Faction)
	ESX.SetPlayerData('faction', Faction)
end)
```


