---
position: 1
---

<h2><u>simple :</u></h2>

* `supv.marker.simple(coords: vector3, data: table): function => void()`
    * `coords: vector3` *exemple: `vec3(1.0, 1.0 , 1.0)`*
    * `data?: table`
        * `visible?: boolean|nil` *default: `true`*


<h2><u>advanced :</u></h2>

* `supv.marker.advanced(double: boolean, inside: boolean, coords: vector3, marker1?: table, marker2?: table): function => void()`
    * `double: boolean` *exemple: `true | false`*
    * `inside: boolean` *exemple: `#(GetEntityCoords(PlayerPedId()) - vec3(1.0, 1.0, 1.0)) < 2.0 | false`*
    * `coords: vector3` *exemple: `vec3(1.0, 1.0 , 1.0)`*
    * `marker1?: table`
        * `visible?: boolean|nil` *default: `true`*
    * `marker2?: table` *only: `double: true`*
        * `visible?: boolean|nil` *default: `true`*