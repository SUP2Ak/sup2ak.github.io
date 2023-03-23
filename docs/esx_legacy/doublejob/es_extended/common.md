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

    - <p><u>Puis ajoutez ceci en dessous de <code>ESX.RefreshJobs()</code> :</u></p>

```lua
ESX.RefreshFactions()
```