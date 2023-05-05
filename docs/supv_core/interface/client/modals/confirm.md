---
position: 1
---

<h2><u>supv.openModal (confirm) :</u></h2>

* `supv.openModal(data: table): return boolean`
    * `data: table`
        * `type: string` *exemple: `confirm`*
        * `title?: string` *`h1`*
        * `subtitle?: string` *`h2`*
        * `description: string` *`ReactMarkDown`*

- <p><u>exemple :</u></p>

```lua
local confirm = supv.openModal({
    type = 'confirm',
    description = [[
- Ici je peux écrire ce que j'ai envie!
    - Je peux aussi faire des listes
        - Et des sous-listes

[x] : Checkbox checked
[ ] : Checkbox unchecked

> Ou vous pouvez toout simplement faire : "description = 'Mon texte'"!
]]
})

if confirm then
    print(("Dialog : %s"):format(confirm)) -- true
else
    print(("Dialog : %s"):format(confirm)) -- false
end
```