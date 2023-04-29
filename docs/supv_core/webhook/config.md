---
position: 1
---

<h2><u>Comment le configurer? :</u></h2>

:::info
Pour configurer le webhook, il vous suffit de modifier le fichier `webhook.lua` dans le dossier `config` de la ressource côté `server`.
D'autre information seront intégrer si besoin
:::

```lua
return {
    localization = 'fr_FR',

    channel = {
        ['supv_core'] = '', -- url webhook de votre, pour avoir les maj de supv_core en webhook
        ['supv_tebex'] = '', -- url webhook de votre, pour avoir les maj des script supv acheté sur tebex en webhook
        ['salon1'] = '' -- url webhook de votre, pour votre utilisation personnel, vous pouvez en ajoutez autant que vous voulez
    },

    default = {
        date_format = 'letter', -- letter or numeric
        color = 7055103,
        foot_icon = 'https://avatars.githubusercontent.com/u/95303960?s=280&v=4',
        avatar = "https://avatars.githubusercontent.com/u/95303960?s=280&v=4"
    },

    played_from = 'server' -- shared or server 
}
```

* `localization: string` : langue du webhook, par défaut `fr_FR`
* `channel: table` : liste des webhook
* `default: table` : paramètre par défaut du webhook
    * `date_format: string` : format de la date, par défaut `letter`
    * `color: number` : couleur du webhook, par défaut `7055103`
    * `foot_icon: string` : icone du webhook, par défaut `https://avatars.githubusercontent.com/u/95303960?s=280&v=4`
    * `avatar: string` : avatar du webhook, par défaut `https://avatars.githubusercontent.com/u/95303960?s=280&v=4`
* `played_from: string` : si vous voulez que les webhook(s) peuvent être jouer depuis le serveur, ou les deux (serveur + client) par défaut: `server`

:::danger
Si vous jouez le webhook depuis le client, il faut impérativement que vous utilisez le fichier `server\config\webhook.lua` et que vous configurez vos url dans la `table: channel` pour des raison de sécuriter!
:::
