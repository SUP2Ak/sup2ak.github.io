---
sidebar_position: 1
---

# server/framework/es_extended.lua

Add/Refresh les `factions` au `groups`

- <p><u>Trouvez la fonction <code>function IsPlayerInGroup(player, filter)</code>, et remplacez le entièrement par celui-ci :</u></p>

```lua
function IsPlayerInGroup(player, filter)
    local type = type(filter)

    if type == 'string' then
        if player.job.name == filter then
            return player.job.name, player.job.grade
        elseif player.faction.name == filter then
            return player.faction.name, player.faction.grade
        end
    else
        local tabletype = table.type(filter)

        if tabletype == 'hash' then
            local grade, gradef = filter[player.job.name], filter[player.faction.name]

            if grade and grade <= player.job.grade then
                return player.job.name, player.job.grade
            elseif gradef and gradef <= player.faction.grade then
                return player.faction.name, player.faction.grade
            end
        elseif tabletype == 'array' then
            for i = 1, #filter do
                if player.job.name == filter[i] then
                    return player.job.name, player.job.grade
                elseif player.faction.name == filter[i] then
                    return player.faction.name, player.faction.grade
                end
            end
        end
    end
end
```