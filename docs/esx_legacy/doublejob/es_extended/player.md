---
sidebar_position: 2
---

# server/classes/player.lua

Ici vous allez ajoutez la faction au player objet & statebags

<h2><u>Etape 1 :</u></h2>

- <p><u>Pour commencer il nous faudra remplacer cette ligne :</u></p>

```lua
function CreateExtendedPlayer(playerId, identifier, group, accounts, inventory, weight, job, loadout, name, coords)
```
- <p><u>Par ceci :</u></p>

```lua
function CreateExtendedPlayer(playerId, identifier, group, accounts, inventory, weight, job, faction, loadout, name, coords)
```
<h2><u>Etape 2 :</u></h2>

- <p><u>En dessous de :</u></p>

```lua
local self = {}
```
- <p><u>Ajoutez ceci :</u></p>

```lua
self.faction = faction
```

<h2><u>Etape 3 :</u></h2>

- <p><u>Au niveau des setting des 'StateBags' ca ressemble a ceci :</u></p>

```lua
local stateBag = Player(self.source).state
	stateBag:set("identifier", self.identifier, true)
	stateBag:set("license", self.license, true)
	stateBag:set("job", self.job, true)
	stateBag:set("group", self.group, true)
	stateBag:set("name", self.name, true)
	stateBag:set("metadata", self.metadata, true)
-- ...
```
- <p><u>Ajoutez ceci en dessous :</u></p>

```lua
stateBag:set("faction", self.faction, true)
``` 
<h2><u>Etape 4 :</u></h2>

- <p><u>Après cette fonction :</u></p>

```lua
function self.triggerEvent(eventName, ...)
	TriggerClientEvent(eventName, self.source, ...)
end
```

- <p><u>Ajoutez tout ceci :</u></p>

```lua
function self.getFaction()
    return self.faction
end

function self.setFaction(faction, gradef)
    gradef = tostring(gradef)
    local lastFaction = json.decode(json.encode(self.faction))

    if ESX.DoesFactionExist(faction, gradef) then
        local factionObject, gradefObject = ESX.Factions[faction], ESX.Factions[faction].grades[gradef]

        self.faction.id    = factionObject.id
        self.faction.name  = factionObject.name
        self.faction.label = factionObject.label

        self.faction.grade        = tonumber(gradef)
        self.faction.grade_name   = gradefObject.name
        self.faction.grade_label  = gradefObject.label
        self.faction.grade_salary = gradefObject.salary

        if gradefObject.skin_male then
            self.faction.skin_male = json.decode(gradefObject.skin_male)
        else
            self.faction.skin_male = {}
        end

        if gradefObject.skin_female then
            self.faction.skin_female = json.decode(gradefObject.skin_female)
        else
            self.faction.skin_female = {}
        end

        TriggerEvent('esx:setFaction', self.source, self.faction, lastFaction)
        self.triggerEvent('esx:setFaction', self.faction)
        Player(self.source).state:set("faction", self.faction, true)
    else
        print(('[es_extended] [^3WARNING^7] Ignoring invalid ^5.setFaction()^7 usage for ID: ^5%s^7, Faction: ^5%s^7'):format(self.source, faction))
    end
end
```

