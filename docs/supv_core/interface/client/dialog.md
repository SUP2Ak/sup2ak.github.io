---
position: 1
---

:::info
Des features sur la personnalisation des dialogues sont en cours de développement, elles seront disponibles prochainement!
:::

<h2><u>supv.createDialog :</u></h2>

* `supv.createDialog(data: table): return boolean`
    * `data: table`
        * `title: string`
        * `subtitle?: string`
        * `description: string`


- <p><u>exemple :</u></p>

```lua
local dialog = supv.createDialog({title = 'Mon titre', description = "Ici je peux écrire ce que j'ai envie!"})
if dialog then
    print(("Dialog : %s"):format(dialog)) -- true
else
    print(("Dialog : %s"):format(dialog)) -- false
end
```