---
position: 1
---

<h2><u>supv.json.load :</u></h2>

* `supv.json.load(filePath: string, resourceName?: string): return table`
    * `filePath: string`
    * `resourceName?: string` *default:* `supv.env`

:::info
*L'exemple ci-dessous est un exemple de fichier json quand vous avez à la racine de votre ressource*
:::

- <p><u>exemple :</u></p>

`data.json`
```json
{
    "name": "Jean Yves",
    "age": 25,
}
```

`client.lua`
```lua
local user = supv.json.load('data')
print(user.name) -- affiche 'Jean Yves'
print(user.age) -- affiche 25
```

<h2><u>supv.json.save :</u></h2>

* `supv.json.save(filePath: string, data: table, resourceName?: string): boolean`
    * `filePath: string`
    * `data: string|table`
    * `resourceName?: string` *default:* `supv.env`
    * `dataLength?: number` *default:* `-1`

:::info
*L'exemple ci-dessous est un exemple de fichier json quand vous avez à la racine de votre ressource*
:::

- <p><u>exemple :</u></p>

`data.json` ***(avant l'exécution du script)***
```json
{
    "name": "Jean Yves",
    "age": 25,
}
```

`server.lua` ***(exécution du script)***
```lua
local user = supv.json.load('data')
print(user.name) -- affiche 'Jean Yves'
print(user.age) -- affiche 25
user.age = 26
supv.json.save('data', user)
```

`data.json` ***(après l'exécution du script)***
```json
{
    "name": "Jean Yves",
    "age": 26,
}
```

