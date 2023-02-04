---
sidebar_position: 4
---

# server/common.lua

Ici vous allez ajoutez stocker les factions et les chargé dans votre serveur

- <p><u>Au début de votre fichier vous avez ceci :</u></p>

```lua
ESX = {}
ESX.Players = {}
ESX.Jobs = {}
```

- <p><u>En dessous de<code> ESX.Jobs</code>, ajoutez ceci :</u></p>

```lua
ESX.Factions = {}
```

- <p><u>Cherchez la fonction :</u><code>MySQL.ready(function()</code></p>

    - <p><u>Puis remplacer la fonction entière avec ceci :</u></p>

```lua
MySQL.ready(function()
    if not Config.OxInventory then
        local items = MySQL.query.await('SELECT * FROM items')
        for k, v in ipairs(items) do
            ESX.Items[v.name] = { label = v.label, weight = v.weight, rare = v.rare, canRemove = v.can_remove }
        end
    else
        TriggerEvent('__cfx_export_ox_inventory_Items', function(ref)
            if ref then
                ESX.Items = ref()
            end
        end)

        AddEventHandler('ox_inventory:itemList', function(items)
            ESX.Items = items
        end)

        while not next(ESX.Items) do
            Wait(0)
        end
    end

    local Jobs = {}
    local jobs = MySQL.query.await('SELECT * FROM jobs')

    for _, v in ipairs(jobs) do
        Jobs[v.name] = v
        Jobs[v.name].grades = {}
    end

    local jobGrades = MySQL.query.await('SELECT * FROM job_grades')

    for _, v in ipairs(jobGrades) do
        if Jobs[v.job_name] then
            Jobs[v.job_name].grades[tostring(v.grade)] = v
        else
            print(('[^3WARNING^7] Ignoring job grades for ^5%s^0 due to missing job'):format(v.job_name))
        end
    end

    for _, v in pairs(Jobs) do
        if ESX.Table.SizeOf(v.grades) == 0 then
            Jobs[v.name] = nil
            print(('[^3WARNING^7] Ignoring job ^5%s^0 due to no job grades found'):format(v.name))
        end
    end

    if not Jobs then
        -- Fallback data, if no jobs exist
        ESX.Jobs['unemployed'] = { label = 'Unemployed',
        grades = { ['0'] = { grade = 0, label = 'Unemployed', salary = 200, skin_male = {}, skin_female = {} } } }
    else
        ESX.Jobs = Jobs
    end

    --Faction
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
            print(('[^3WARNING^7] Ignoring faction ^5"%s"^0due to no faction grades found'):format(v.name))
        end
    end

    if not Factions then
        -- Fallback data, if no factions exist
        ESX.Factions['nofaction'] = {
            label = 'Sans faction',
            grades = { ['0'] = { grade = 0, label = 'Sans faction', salary = 0, skin_male = {}, skin_female = {} } }
        }
    else
        ESX.Factions = Factions
    end

    print('[^2INFO^7] ESX ^5Legacy 1.9.1^0 initialized!')
    StartDBSync()
    StartPayCheck()
end)
```

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