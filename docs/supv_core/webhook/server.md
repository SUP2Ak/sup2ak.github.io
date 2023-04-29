---
position: 2
---

<h2><u>supv.webhook :</u></h2>

<p><u>exemple pour faire un embed:</u></p>

* `supv.webhook('embed', url: string, embeds: table, data?: table): return void`
    * `url: string`
    * `embeds: table`
        * `title?: string`
        * `description?: string`
        * `fields?: table` *Non disponible pour le moments...*
            * `name: string`
            * `value: string`
            * `inline?: boolean`
        * `image?: string`
        * `color?: integer`
    * `data?: table`
        * `bot_name?: string`
        * `avatar?: string`
        * `date_format?: string`
        * `footer_icon?: string`

```lua
supv.webhook('embed', 'salon1', {
    title = 'titre',
    description = 'description',
    --[[
    fields = {
       {name = 'field1', value = 'value1', inline = true},
       {name = 'field2', value = 'value2', inline = true},
       {name = 'field3', value = 'value3', inline = true},
    },]]
    color = 16711680, 
}, {
    bot_name = 'nom du bot',
})
```

<p><u>exemple pour faire un message:</u></p>

* `supv.webhook('message', url: string, text: string, data?: table): return void`
    * `url: string`
    * `text: string`
    * `data?: table`
        * `bot_name?: string`
        * `avatar?: string`

```lua
supv.webhook('message', 'salon1', 'Mon message')
```