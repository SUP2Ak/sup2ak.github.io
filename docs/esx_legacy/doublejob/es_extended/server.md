---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition'

# server/main.lua

Initiallisez la faction au joueur au joueur qui ce connecte

- <p><u>Query :</u></p>

    - <p><u>Au début de votre fichier vous avez cette variable :</u></p>

        ```lua
        local loadPlayer = 'SELECT `accounts`, `job`, `job_grade`, `group`, `position`, `inventory`, `skin`, `loadout`'
        ```

    - <p><u>Remplacez là par celle-ci :</u></p>

        ```lua
        local loadPlayer = 'SELECT `accounts`, `job`, `job_grade`, `faction`, `faction_grade`, `group`, `position`, `inventory`, `skin`, `loadout`'
        ```

- <p><u>Les boucles:</u></p>
    <Admonition type="tip" icon="💡" title="Savez vous que ...">
        <p> Vous pouvez chercher toute les boucles dans votre editeur de texte via <code>ctrl+f</code> copié : <code>while not next(ESX.Jobs) do</code> et remplacer par ceci : <code>while not next(ESX.Jobs) and not next(ESX.Factions) do</code> </p>
    </Admonition>

    - <p><u>Cherchez dans le fichier toute les boucles ci-dessous :</u></p>

    ```lua
    while not next(ESX.Jobs) do
        Wait(50)
    end
    ```

    - <p><u>Et remplacez les par ceci :</u></p>

    ```lua
    while not next(ESX.Jobs) and not next(ESX.Factions) do
        Wait(50)
    end
    ```

- <p><u>Dans la function <code>function loadESXPlayer(identifier, playerId, isNew)</code></u></p>

    - <p><u>Table userData</u></p>

        - <p><u>Remplacez la variable</u></p>

            ```lua
            local userData = {accounts = {}, inventory = {}, job = {}, loadout = {}, playerName = GetPlayerName(playerId), weight = 0}
            ```

        - <p><u>Par celle ci :</u></p>

            ```lua
            local userData = {accounts = {}, inventory = {}, job = {}, faction = {}, loadout = {}, playerName = GetPlayerName(playerId), weight = 0}
            ```

    - <p><u>Variable (faction, gradef, factionObject, gradefObject)</u></p>

        - <p><u>En dessous de :</u></p>

            ```lua
            local job, grade, jobObject, gradeObject = result.job, tostring(result.job_grade)
            ```

        - <p><u>Ajoutez ceci :</u></p>

            ```lua
            local faction, gradef, factionObject, gradefObject = result.faction, tostring(result.faction_grade)
            ```

    - <p><u>Charger la faction object pour le player object</u></p>

        - <p><u>Au dessus de :</u></p>

            ```lua
            -- Job
            if ESX.DoesJobExist(job, grade) then
                jobObject, gradeObject = ESX.Jobs[job], ESX.Jobs[job].grades[grade]
            else
                print(('[^3WARNING^7] Ignoring invalid job for ^5%s^7 [job: ^5%s^7, grade: ^5%s^7]'):format(identifier, job, grade))
                job, grade = 'unemployed', '0'
                jobObject, gradeObject = ESX.Jobs[job], ESX.Jobs[job].grades[grade]
            end
            ```

        - <p><u>Ajoutez ceci :</u></p>

            ```lua
            --Faction
            if ESX.DoesFactionExist(faction, gradef) then
                factionObject, gradefObject = ESX.Factions[faction], ESX.Factions[faction].grades[gradef]
            else
                print(('[^3WARNING^7] Ignoring invalid faction for %s [faction: %s, grade: %s]'):format(identifier, faction, gradef))
                faction, gradef = 'nofaction', '0'
                factionObject, gradefObject = ESX.Factions[faction], ESX.Factions[faction].grades[gradef]
            end

            userData.faction.id = factionObject.id
            userData.faction.name = factionObject.name
            userData.faction.label = factionObject.label

            userData.faction.grade = tonumber(gradef)
            userData.faction.grade_name = gradefObject.name
            userData.faction.grade_label = gradefObject.label
            userData.faction.grade_salary = gradefObject.salary

            userData.faction.skin_male = {}
            userData.faction.skin_female = {}

            if gradefObject.skin_male then
                userData.faction.skin_male = json.decode(gradefObject.skin_male)
            end
            if gradefObject.skin_female then
                userData.faction.skin_female = json.decode(gradefObject.skin_female)
            end
            ```

    - <p><u>Ajoutez l'object faction sur la création du player objet</u></p>

        - <p><u>Trouvez cette variable :</u></p>

             ```lua
            local xPlayer = CreateExtendedPlayer(playerId, identifier, userData.group, userData.accounts, userData.inventory, userData.weight, userData.job, userData.loadout, userData.playerName, userData.coords)
            ```

        - <p><u>Puis remplacez là par celle-ci :</u></p>

            ```lua
            local xPlayer = CreateExtendedPlayer(playerId, identifier, userData.group, userData.accounts, userData.inventory, userData.weight, userData.job, userData.faction, userData.loadout, userData.playerName, userData.coords)
            ```

    - <p><u>Envoyez le player objet au client (ESX.PlayerData)</u></p>

        - <p><u>Trouvez la function ci-dessous :</u></p>

            ```lua
            xPlayer.triggerEvent('esx:playerLoaded',
            {
                accounts = xPlayer.getAccounts(),
                coords = xPlayer.getCoords(),
                identifier = xPlayer.getIdentifier(),
                inventory = xPlayer.getInventory(),
                job = xPlayer.getJob(),
                loadout = xPlayer.getLoadout(),
                maxWeight = xPlayer.getMaxWeight(),
                money = xPlayer.getMoney(),
                sex = xPlayer.get("sex") or "m",
                firstName = xPlayer.get("firstName") or "John",
                lastName = xPlayer.get("lastName") or "Doe",
                dateofbirth = xPlayer.get("dateofbirth") or "01/01/2000",
                height = xPlayer.get("height") or 120,
                dead = false
            }, isNew, userData.skin)
            ```

        - <p><u>Remplacez là par celle-ci :</u></p>

            ```lua
            xPlayer.triggerEvent('esx:playerLoaded',
            {
                accounts = xPlayer.getAccounts(),
                coords = xPlayer.getCoords(),
                identifier = xPlayer.getIdentifier(),
                inventory = xPlayer.getInventory(),
                job = xPlayer.getJob(),
                faction = xPlayer.getFaction(),
                loadout = xPlayer.getLoadout(),
                maxWeight = xPlayer.getMaxWeight(),
                money = xPlayer.getMoney(),
                sex = xPlayer.get("sex") or "m",
                firstName = xPlayer.get("firstName") or "John",
                lastName = xPlayer.get("lastName") or "Doe",
                dateofbirth = xPlayer.get("dateofbirth") or "01/01/2000",
                height = xPlayer.get("height") or 120,
                dead = false
            }, isNew, userData.skin)
            ```

- <p><u>Vous pouvez modifier la function callback par défaut</u></p>

    - <p><u>Cherchez la fonction <code>ESX.RegisterServerCallback('esx:getOtherPlayerData', function(source, cb, target)</code> et Remplacez là par celle-ci</u></p>

    ```lua
    ESX.RegisterServerCallback('esx:getOtherPlayerData', function(source, cb, target)
    local xPlayer = ESX.GetPlayerFromId(target)

    cb({identifier = xPlayer.identifier, accounts = xPlayer.getAccounts(), inventory = xPlayer.getInventory(), job = xPlayer.getJob(), faction = xPlayer.getFaction(), loadout = xPlayer.getLoadout(), money =xPlayer.getMoney(), position = xPlayer.getCoords(true)})
    end)
    ```

    - <p><u>Cherchez la fonction <code>ESX.RegisterServerCallback('esx:getPlayerData', function(source, cb)</code> et Remplacez là par celle-ci</u></p>

    ```lua
    ESX.RegisterServerCallback('esx:getPlayerData', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(target)

    cb({identifier = xPlayer.identifier, accounts = xPlayer.getAccounts(), inventory = xPlayer.getInventory(), job = xPlayer.getJob(), faction = xPlayer.getFaction(), loadout = xPlayer.getLoadout(), money =xPlayer.getMoney(), position = xPlayer.getCoords(true)})
    end)
    ```