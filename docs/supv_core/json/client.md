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
