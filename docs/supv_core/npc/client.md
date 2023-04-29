---
position: 1
---

<h2><u>supv.npc.new :</u></h2>

* `supv.npc.new(model: string|hash, coords: vec4, data: table): function return table`
    * `model: string|hash` *exemple: `s_m_y_cop_01`*
    * `coords: vec4` *exemple: `vec4(1.0, 1.0 , 1.0, 0.0)`*
    * `data?: table`
        * `network?: boolean` *default: `true`*
        * `blockevent?: boolean` *default: `true`*
        * `godmode?: boolean` *default: `true`*
        * `freeze?: boolean` *default: `true`*
        * `variation?: number` *default: `0`*
        * `weapon?: NpcWeaponsProps`
            * `model: string|number` *exemple: `WEAPON_PISTOL`*
            * `ammo?: number` *default: `0`*
            * `visible?: boolean` *default: `true`*

    * `method:`
        * `self:remove: function(): return nil`

- <p><u>exemple :</u></p>

```lua
RegisterCommand('create:npc', function()
    local player = supv.player.get()
    local coords = (player:getCoords(true) + vec4(1, 1, -1, 0))
    local npc = supv.npc.new('s_m_y_cop_01', coords) -- create npc
    Wait(5000)
    npc = npc:remove() -- remove npc 5sec après sa création
end)
```