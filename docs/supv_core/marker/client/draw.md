---
position: 1
---

<h2><u>supv.marker.draw :</u></h2>

* `supv.marker.draw(coords: vec3, data?: table, options?: table): void`
    * `coords: vector3` *exemple: `vec3(1.0, 1.0 , 1.0)`*
    * `data?: table`
        * `id?: boolean`
        * `color1?: boolean`
        * `color2?: boolean`
        * `dir?: table`
        * `rot?: table`
        * `scale?: table`
        * `updown?: boolean`
        * `faceToCam?: boolean`
        * `p19?: integer`
        * `textureDict?: string`
        * `textureName?: string`
        * `drawOnEnts?: boolean`
        * `z?: number`
        * `op?: integer`
        * `rotate?: boolean`
    * `options?: table`
        * `visible?: boolean` *default: `true`*
        * `double?: boolean`
        * `inside?: boolean`


        
- <p><u>exemple :</u></p>

```lua
CreateThread(function()
    local player = supv.player.get()
    local coords = player:getCoords()
    while true do
        supv.marker.draw(coords, {}, {inside = player:distance(coords) < 2})
        Wait(0)
    end
end)
```