---
title: Pour utiliser le core
sidebar_position: 1
slug: ./
---

Importer le core dans vos ressource

<h2><u>server.cfg :</u></h2>

- <p><u>Il est conseillée de start la ressource avant vos framework (es_extended par exemple) :</u></p>

```yaml
ensure supv_core
ensure es_extended
```

<h2><u>fxmanifest.lua :</u></h2>

:::danger Attention!!!
Il est important que ceci tout être en haut de votre script!
:::

- <p><u>Pour appeler l'objet supv dans votre ressource :</u></p>

```lua
lua54 'yes'

shared_script '@supv_core/import.lua'
```