---
sidebar_position: 2
---

# modules/bridge/esx/server.lua

Add/Refresh les `factions` au `groups`

- <p><u>esx:setFaction</u></p>

    - <p><u>Dessous de ce que vous avez ici :</u></p>

        ```lua
        AddEventHandler('esx:setJob', function(source, job, lastJob)
            local inventory = Inventory(source)
            if not inventory then return end
            inventory.player.groups[lastJob.name] = nil
            inventory.player.groups[job.name] = job.grade
        end)
        ```

    - <p><u>Ajoutez ceci :</u></p>

        ```lua
        AddEventHandler('esx:setFaction', function(source, faction, lastFaction)
            local inventory = Inventory(source)
            if not inventory then return end
            inventory.player.groups[lastFaction.name] = nil
            inventory.player.groups[faction.name] = faction.grade
        end)
        ```

- <p><u>Trouvez la fonction <code>function server.setPlayerData(player)</code>, et remplacez le entièrement par celui-ci :</u></p>

```lua
function server.setPlayerData(player)
	local groups = {
		[player.job.name] = player.job.grade,
		[player.faction.name] = player.faction.name
	}

	return {
		source = player.source,
		name = player.name,
		groups = groups,
		sex = player.sex or player.variables.sex,
		dateofbirth = player.dateofbirth or player.variables.dateofbirth,
	}
end
```