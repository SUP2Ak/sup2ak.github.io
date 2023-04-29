---
position: 1
---

:::info
Des features sont en cours de développement, elles seront disponibles prochainement!
:::

<h2><u>supv.player.get :</u></h2>

* `supv.player.get(): return table`
    * `distance: function(coords: vec3) return #(self:getCoords() - coords)`
    * `getCoords: function(vec4?: boolean) return self.coords`
    
- <p><u>exemple :</u></p>

```lua
CreateThread(function()
    local player = supv.player.get()
    local pos = vec3(100, 100, 5)
    while true do
        print(player:getCoords(), 'vec3', player.coords)
        print(player:getCoords(true), 'vec4', player.coords)
        print(player:distance(pos), 'dist', player.dist)

        Wait(2000)
    end
end)