---
sidebar_position: 1
---

# client/framework/esx.lua

Add/Refresh les `factions` au `groups`

- <p><u>groups</u></p>

    - <p><u>Cherchez cette variable :</u></p>

        ```lua
		local groups = { 'job', 'job2' }
        ```

    - <p><u>Remplacez là par ceci :</u></p>

        ```lua
		local groups = { 'job', 'faction' }
        ```

- <p><u>Trouvez l'event <code>RegisterNetEvent('esx:setJob2', function(job)</code>, et remplacez le entièrement par celui-ci :</u></p>

```lua
RegisterNetEvent('esx:setFaction', function(faction)
    if source == '' then return end
    playerGroups.faction = faction
end)
```