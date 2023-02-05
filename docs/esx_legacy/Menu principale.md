---
title: Utilisation faction
sidebar_position: 1
slug: ./
---

Comment utiliser le système de faction?

<h2><u>fxmanifest.lua :</u></h2>

- <p><u>Pour appeler l'objet ESX dans votre ressource :</u></p>

```lua
shared_script '@es_extended/imports.lua'
```

<h2><u>Côté client (ESX.PlayerData.faction)</u></h2>

* <p><u>Le type & la structure de ESX.PlayerData.faction :  </u></p>

    * `ESX.PlayerData.faction: table`
        * `name: string`
        * `label: string`
        * `grade: number`
        * `grade_name: string`
        * `grade_label: string` 
        * `salary: number`

- <p><u>Pour récuperer la faction et l'actualiser, il vous suffit d'enregistrez cette event côté client :</u></p>

```lua
RegisterNetEvent('esx:setFaction', function(faction)
    ESX.PlayerData.faction = faction
end)
```

<h2><u>Les fonctions que vous pouvez avoir Côté serveur</u></h2>

- <p><u>Via le player objet</u></p>

    * <p><u>Le type & la structure de xPlayer.faction :</u></p>

        * `xPlayer.faction: table`
            * `name: string`
            * `label: string`
            * `grade: number`
            * `grade_name: string`
            * `grade_label: string` 
            * `salary: number`

            ```lua
            -- exemple :
            local xPlayer = ESX.GetPlayerFromId(source)
            print(json.encode(xPlayer.faction, {indent = true}))
            ```

    * <p><u>Des function sur le player objet</u></p>

    ```lua
    -- exemple :
    local xPlayer = ESX.GetPlayerFromId(source)
    print(xPlayer.getFaction())
    xPlayer.setFaction('vagos', 0)
    ```

- <p><u>Autre fonctionnalité</u></p>

    - <p><u>ESX.GetExtendedPlayers</u></p>

    ```lua
    -- exemple :
    local xPlayers = ESX.GetExtendedPlayers('faction', 'vagos') -- recupère tout les joueur en ligne dans la faction vagos
    print(json.encode(xPlayers, {indent = true}))
    ```

    - <p><u>ESX.RefreshFactions</u></p>

    ```lua
    -- exemple :
    ESX.RefreshFactions() -- refresh le chargement de toute les factions enregistrer en db dans l'objet ESX
    ```

    - <p><u>ESX.GetFactions</u></p>

    ```lua
    -- exemple :
    local factions = ESX.GetFactions() -- Récupère tout les fonction pré chargé en db
    print(json.encode(factions, {indent = true}))
    ```

    - <p><u>ESX.DoesFactionExist</u></p>

    ```lua
    -- exemple :
    local exist = ESX.DoesFactionExist('vagos', 0) 
    print(exist) -- true si la faction vagos et le grade 0 existe, false si elle n'existe pas
    ```
