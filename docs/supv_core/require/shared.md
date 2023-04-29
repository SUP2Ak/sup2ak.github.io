---
position: 1
---

<h2><u>require :</u></h2>

* `require(path: string): any`

- <p><u>exemple :</u></p>

*exemple dans votre ressource vous avez un fichier shared dans votre dossier config constituer ainsi :*

```lua	
return {
    test = 'test'
}
```

```lua
local config <const> = require 'config.shared'
print(config.test) -- affiche 'test'
```

- <p><u>exemple avancé:</u></p>

*exemple dans votre ressource vous avez un fichier shared dans votre dossier config mais vous voulez charger certaines choses par rapport a l'environnement client/server/shared :*

```lua
local config = {}

if supv.service == 'client' then
    config.test = 'Je suis dans le client'
elseif supv.service == 'server' then
    config.test = 'Je suis dans le serveur'
end

config.test2 = 'Je suis dans le shared'

return config
```

```lua
local config <const> = require 'config.shared'
print(config.test) -- affiche 'Je suis dans le client' si vous êtes dans le client et vice versa
print(config.test2) -- affiche 'Je suis dans le shared' dans tous les cas
```