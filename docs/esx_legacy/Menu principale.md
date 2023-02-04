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

- <p><u>Pour récuperer la faction et l'actualiser, il vous suffit d'enregistrez cette event côté client :</u></p>

```lua
RegisterNetEvent('esx:setFaction', function(faction)
    ESX.PlayerData.faction = faction
end)
```

* <p><u>Le type & la structure de ESX.PlayerData.faction :  </u></p>

    * `ESX.PlayerData.faction: table`
        * `name: string`
        * `label: string`
        * `grade: number`
        * `grade_name: string`
        * `grade_label: string` 
        * `salary: number`
