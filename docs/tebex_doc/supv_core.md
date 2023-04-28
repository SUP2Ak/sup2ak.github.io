---
title: supv_core
sidebar_position: 1
---

Ce que toute mes ressources ont besoin

- Vous pouvez retrouver cette ressource [ici](https://github.com/SUP2Ak/supv_core)

    - <p><u>server.cfg :</u></p>

        - <p><u>Il est conseillée de start la ressource avant vos framework (es_extended par exemple) :</u></p>

        ```yaml
        ensure supv_core
        ensure es_extended
        ```
