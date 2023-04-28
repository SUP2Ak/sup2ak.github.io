---
sidebar_position: 3
---

# server/function.lua

Ici vous allez ajoutez les function pour le système de faction

- <p><u>Cherchez la fonction :</u><code>function Core.SavePlayer(xPlayer, cb)</code></p>

    - <p><u>Puis remplacer la fonction entière avec ceci :</u></p>

```lua
function Core.SavePlayer(xPlayer, cb)
	MySQL.prepare('UPDATE `users` SET `accounts` = ?, `job` = ?, `job_grade` = ?, `faction` = ?, `faction_grade` = ?, `group` = ?, `position` = ?, `inventory` = ?, `loadout` = ? WHERE `identifier` = ?', {
		json.encode(xPlayer.getAccounts(true)),
		xPlayer.job.name,
		xPlayer.job.grade,
        xPlayer.faction.name,
		xPlayer.faction.grade,
		xPlayer.group,
		json.encode(xPlayer.getCoords()),
		json.encode(xPlayer.getInventory(true)),
		json.encode(xPlayer.getLoadout(true)),
		xPlayer.identifier
	}, function(affectedRows)
		if affectedRows == 1 then
			print(('[^2INFO^7] Saved player ^5"%s^7"'):format(xPlayer.name))
			TriggerEvent('esx:playerSaved', xPlayer.playerId, xPlayer)
		end
		if cb then cb() end
	end)
end
```

- <p><u>Ensuite chercher la fonction :</u><code>function Core.SavePlayers(cb)</code></p>

    - <p><u>Puis remplacer la fonction entière avec ceci :</u></p>

```lua
function Core.SavePlayers(cb)
	local xPlayers = ESX.GetExtendedPlayers()
	local count = #xPlayers
	if count > 0 then
		local parameters = {}
		local time = os.time()
		for i=1, count do
			local xPlayer = xPlayers[i]
			parameters[#parameters+1] = {
				json.encode(xPlayer.getAccounts(true)),
				xPlayer.job.name,
				xPlayer.job.grade,
                xPlayer.faction.name,
				xPlayer.faction.grade,
				xPlayer.group,
				json.encode(xPlayer.getCoords()),
				json.encode(xPlayer.getInventory(true)),
				json.encode(xPlayer.getLoadout(true)),
				xPlayer.identifier
			}
		end
		MySQL.prepare("UPDATE `users` SET `accounts` = ?, `job` = ?, `job_grade` = ?, `faction` = ?, `faction_grade` = ?, `group` = ?, `position` = ?, `inventory` = ?, `loadout` = ? WHERE `identifier` = ?", parameters,
		function(results)
			if results then
				if type(cb) == 'function' then cb() else print(('[^2INFO^7] Saved %s %s over %s ms'):format(count, count > 1 and 'players' or 'player', ESX.Math.Round((os.time() - time) / 1000000, 2))) end
			end
		end)
	end
end
```

- <p><u>Ensuite chercher la fonction :</u><code>function ESX.GetExtendedPlayers(key, val)</code></p>

    - <p><u>Puis remplacer la fonction entière avec ceci :</u></p>

```lua
function ESX.GetExtendedPlayers(key, val)
    local xPlayers = {}
    for k, v in pairs(ESX.Players) do
        if key then
            if (key == 'job' and v.job.name == val) or (key == 'faction' and v.faction.name == val) or v[key] == val then
                xPlayers[#xPlayers + 1] = v
            end
        else
            xPlayers[#xPlayers + 1] = v
        end
    end
    return xPlayers
end
```

- <p><u>Ensuite tout en bas de votre fichier ajouter toute ces fonctions :</u></p>

```lua
function ESX.RefreshFactions()
    local Factions = {}
    local factions = MySQL.query.await('SELECT * FROM factions')

    for _, v in ipairs(factions) do
        Factions[v.name] = v
        Factions[v.name].grades = {}
    end

    local factionGrades = MySQL.query.await('SELECT * FROM faction_grades')

    for _, v in ipairs(factionGrades) do
        if Factions[v.faction_name] then
            Factions[v.faction_name].grades[tostring(v.grade)] = v
        else
            print(('[^3WARNING^7] Ignoring faction grades for ^5"%s"^0 due to missing faction'):format(v.faction_name))
        end
    end

    for _, v in pairs(Factions) do
        if ESX.Table.SizeOf(v.grades) == 0 then
            Factions[v.name] = nil
            print(('[^3WARNING^7] Ignoring faction ^5"%s"^0 due to no faction grades found'):format(v.name))
        end
    end

    if not Factions then
        -- Fallback data, if no factions exist
        ESX.Factions['nofaction'] = {label = 'Faction', grades = {['0'] = {grade = 0, label = 'Sans faction', salary = 0, skin_male = {}, skin_female = {}}}}
    else
        ESX.Factions = Factions
    end
end

function ESX.GetFactions()
	return ESX.Factions
end

function ESX.DoesFactionExist(faction, gradef)
	gradef = tostring(gradef)

	if faction and gradef then
		if ESX.Factions[faction] and ESX.Factions[faction].grades[gradef] then
			return true
		end
	end
	return false
end
```