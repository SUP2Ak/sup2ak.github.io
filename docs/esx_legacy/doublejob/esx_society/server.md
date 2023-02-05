---
sidebar_position: 2
---

# server/main.lua

Modifié esx_society afin d'intégrer les factions en société en auto

- <p><u>Init des factions :</u></p>

    - <p><u>En dessous de :</u></p>

        ```lua
        local Jobs = setmetatable({}, {__index = function(_, key)
            return ESX.GetJobs()[key]
        end
        })
        ```

    - <p><u>Ajoutez ceci :</u></p>

        ```lua
        local Factions = setmetatable({}, {__index = function(_, key)
            return ESX.GetFactions()[key]
        end})
        ```

- <p><u>Les events :</u></p>

    - <p><u>Trouvez l'event : <code>RegisterServerEvent('esx_society:checkSocietyBalance')</code>, et remplacez le entièrement par celui-ci :</u></p>

        ```lua
        RegisterServerEvent('esx_society:checkSocietyBalance')
        AddEventHandler('esx_society:checkSocietyBalance', function(society)
            local xPlayer = ESX.GetPlayerFromId(source)
            local society = GetSociety(society)

            if (xPlayer.job.name ~= society.name) or (xPlayer.faction.name ~= society.name) then
                print(('esx_society: %s attempted to call checkSocietyBalance!'):format(xPlayer.identifier))
                return
            end

            TriggerEvent('esx_addonaccount:getSharedAccount', society.account, function(account)
                TriggerClientEvent("esx:showNotification", xPlayer.source, TranslateCap('check_balance', ESX.Math.GroupDigits(account.money)))
            end)
        end)
        ```

    - <p><u>Trouvez l'event : <code>RegisterServerEvent('esx_society:withdrawMoney')</code>, et remplacez le entièrement par celui-ci :</u></p>

        ```lua
        RegisterServerEvent('esx_society:withdrawMoney')
        AddEventHandler('esx_society:withdrawMoney', function(societyName, amount)
            local source = source
            local society = GetSociety(societyName)
            if not society then
                print(('[^3WARNING^7] Player ^5%s^7 attempted to withdraw from non-existing society - ^5%s^7!'):format(source, societyName))
                return
            end
            local xPlayer = ESX.GetPlayerFromId(source)
            amount = ESX.Math.Round(tonumber(amount))
            if (xPlayer.job.name ~= society.name) or (xPlayer.faction.name ~= society.name) then
                return print(('[^3WARNING^7] Player ^5%s^7 attempted to withdraw from society - ^5%s^7!'):format(source, society.name))
            end

            TriggerEvent('esx_addonaccount:getSharedAccount', society.account, function(account)
                if amount > 0 and account.money >= amount then
                    account.removeMoney(amount)
                    xPlayer.addMoney(amount, "Society Withdraw")
                    xPlayer.showNotification(TranslateCap('have_withdrawn', ESX.Math.GroupDigits(amount)))
                else
                    xPlayer.showNotification(TranslateCap('invalid_amount'))
                end
            end)
        end)
        ```
        
    - <p><u>Trouvez l'event : <code>RegisterServerEvent('esx_society:depositMoney')</code>, et remplacez le entièrement par celui-ci :</u></p>

        ```lua
        RegisterServerEvent('esx_society:depositMoney')
        AddEventHandler('esx_society:depositMoney', function(societyName, amount)
            local source = source
            local xPlayer = ESX.GetPlayerFromId(source)
            local society = GetSociety(societyName)
            if not society then
                print(('[^3WARNING^7] Player ^5%s^7 attempted to deposit to non-existing society - ^5%s^7!'):format(source, societyName))
                return
            end
            amount = ESX.Math.Round(tonumber(amount))

            if (xPlayer.job.name ~= society.name) or (xPlayer.faction.name ~= society.name) then
                return print(('[^3WARNING^7] Player ^5%s^7 attempted to deposit to society - ^5%s^7!'):format(source, society.name))
            end
            if amount > 0 and xPlayer.getMoney() >= amount then
                TriggerEvent('esx_addonaccount:getSharedAccount', society.account, function(account)
                    xPlayer.removeMoney(amount, "Society Deposit")
                    xPlayer.showNotification(TranslateCap('have_deposited', ESX.Math.GroupDigits(amount)))
                    account.addMoney(amount)
                end)
            else
                xPlayer.showNotification(TranslateCap('invalid_amount'))
            end
        end)
        ```

    - <p><u>Trouvez l'event : <code>RegisterServerEvent('esx_society:washMoney')</code>, et remplacez le entièrement par celui-ci :</u></p>

        ```lua
        RegisterServerEvent('esx_society:washMoney')
        AddEventHandler('esx_society:washMoney', function(society, amount)
            local source = source
            local xPlayer = ESX.GetPlayerFromId(source)
            local account = xPlayer.getAccount('black_money')
            amount = ESX.Math.Round(tonumber(amount))

            if (xPlayer.job.name ~= society.name) or (xPlayer.faction.name ~= society.name) then
                return print(('[^3WARNING^7] Player ^5%s^7 attempted to wash money in society - ^5%s^7!'):format(source, society))
            end
            if amount and amount > 0 and account.money >= amount then
                xPlayer.removeAccountMoney('black_money', amount, "Washing")

                MySQL.insert('INSERT INTO society_moneywash (identifier, society, amount) VALUES (?, ?, ?)', {xPlayer.identifier, society, amount},
                function(rowsChanged)
                    xPlayer.showNotification(TranslateCap('you_have', ESX.Math.GroupDigits(amount)))
                end)
            else
                xPlayer.showNotification(TranslateCap('invalid_amount'))
            end
        end)
        ```

- <p><u>Les fonctions :</u></p>

    - <p><u>Vous aurez 1 fonction(s) à modifier</u></p>

        - <p><u>Trouvez la fonction : <code>isPlayerBoss(playerId, job)</code>, et remplacez le entièrement par celui-ci :</u></p>

            ```lua
            function isPlayerBoss(playerId, arg)
                local xPlayer = ESX.GetPlayerFromId(playerId)
                local selected = xPlayer.job.name == arg and 'job' or xPlayer.faction.name == arg and 'faction' or false
                if selected and xPlayer[selected].grade_name == 'boss' then
                    return true, selected
                else
                    print(('esx_society: %s attempted open a society boss menu!'):format(xPlayer.identifier))
                    return false
                end
            end
            ```

- <p><u>Les callacks :</u></p>

    - <p><u>Vous aurez 2 callback à modifier</u></p>

        - <p><u>1. Trouvez le callback : <code>ESX.RegisterServerCallback('esx_society:getEmployees', function(source, cb, society)</code>, et remplacez le entièrement par celui-ci :</u></p>

            ```lua
            ESX.RegisterServerCallback('esx_society:getEmployees', function(source, cb, society)
                local employees, selected = {}, Jobs[society] and 'job' or Factions[society] and 'faction' or 'job'

                local xPlayers = ESX.GetExtendedPlayers(selected, society)
                for i=1, #(xPlayers) do 
                    local xPlayer = xPlayers[i]

                    local name = xPlayer.name
                    if Config.EnableESXIdentity and name == GetPlayerName(xPlayer.source) then
                        name = xPlayer.get('firstName') .. ' ' .. xPlayer.get('lastName')
                    end

                    employees[#employees+1] = {
                        name = name,
                        identifier = xPlayer.identifier,
                        [selected] = {
                            name = society,
                            label = xPlayer[selected].label,
                            grade = xPlayer[selected].grade,
                            grade_name = xPlayer[selected].grade_name,
                            grade_label = xPlayer[selected].grade_label
                        }
                    }
                end
                    
                local query = selected == 'job' and "SELECT identifier, job_grade FROM `users` WHERE `job`= ? ORDER BY job_grade DESC" or selected == 'faction' and "SELECT identifier, faction_grade FROM `users` WHERE `faction`= ? ORDER BY faction_grade DESC"

                if Config.EnableESXIdentity then
                    query = selected == 'job' and "SELECT identifier, job_grade, firstname, lastname FROM `users` WHERE `job`= ? ORDER BY job_grade DESC" or selected == 'faction' and "SELECT identifier, faction_grade, firstname, lastname FROM `users` WHERE `faction`= ? ORDER BY faction_grade DESC"
                end

                MySQL.query(query, {society},
                function(result)
                    for k, row in pairs(result) do
                        local alreadyInTable
                        local identifier = row.identifier

                        for k, v in pairs(employees) do
                            if v.identifier == identifier then
                                alreadyInTable = true
                            end
                        end

                        if not alreadyInTable then
                            local name = "Name not found." -- maybe this should be a locale instead ¯\_(ツ)_/¯

                            if Config.EnableESXIdentity then
                                name = row.firstname .. ' ' .. row.lastname 
                            end

                            local Selected = selected == 'faction' and Factions or selected == 'job' and Jobs
                            local gradeSelected = selected == 'faction' and 'faction_grade' or selected == 'job' and 'job_grade'

                            employees[#employees+1] = {
                                name = name,
                                identifier = identifier,
                                [selected] = {
                                    name = society,
                                    label = Selected[society].label,
                                    grade = row[gradeSelected],
                                    grade_name = Selected[society].grades[tostring(row[gradeSelected])].name,
                                    grade_label = Selected[society].grades[tostring(row[gradeSelected])].label
                                }
                            }
                        end
                    end

                    cb(employees)
                end)

            end)
            ```

        - <p><u>2. Trouvez le callback : <code>ESX.RegisterServerCallback('esx_society:getOnlinePlayers', function(source, cb)</code>, et remplacez le entièrement par celui-ci :</u></p>

            ```lua
            ESX.RegisterServerCallback('esx_society:getOnlinePlayers', function(source, cb)
                if getOnlinePlayers == false and next(onlinePlayers) == nil then -- Prevent multiple xPlayer loops from running in quick succession
                    getOnlinePlayers, onlinePlayers = true, {}
                    
                    local xPlayers = ESX.GetExtendedPlayers()
                    for i=1, #(xPlayers) do 
                        local xPlayer = xPlayers[i]
                        table.insert(onlinePlayers, {
                            source = xPlayer.source,
                            identifier = xPlayer.identifier,
                            name = xPlayer.name,
                            job = xPlayer.job,
                            faction = xPlayer.faction
                        })
                    end
                    cb(onlinePlayers)
                    getOnlinePlayers = false
                    Wait(1000) -- For the next second any extra requests will receive the cached list
                    onlinePlayers = {}
                    return
                end
                while getOnlinePlayers do Wait(0) end -- Wait for the xPlayer loop to finish
                cb(onlinePlayers)
            end)
            ```

    - <p><u>Vous aurez 4 callback à ajouter (en bas du fichier) :</u></p>

        ```lua
        ESX.RegisterServerCallback('esx_society:getFaction', function(source, cb, society)
            if not Factions[society] then
                return cb(false)
            end

            local faction = json.decode(json.encode(Factions[society]))
            local grades = {}

            for k,v in pairs(faction.grades) do
                table.insert(grades, v)
            end

            table.sort(grades, function(a, b)
                return a.grade < b.grade
            end)

            faction.grades = grades

            cb(faction)
        end)

        ESX.RegisterServerCallback('esx_society:setFaction', function(source, cb, identifier, faction, grade, actionType)
            local xPlayer = ESX.GetPlayerFromId(source)
            local isBoss = xPlayer.faction.grade_name == 'boss'
            local xTarget = ESX.GetPlayerFromIdentifier(identifier)

            if not isBoss then
                print(('[^3WARNING^7] Player ^5%s^7 attempted to setFaction for Player ^5%s^7!'):format(source, xTarget.source))
                return cb()
            end

            if not xTarget then
                MySQL.update('UPDATE users SET faction = ?, faction_grade = ? WHERE identifier = ?', {faction, grade, identifier},
                function()
                    cb()
                end)
                return
            end

            xTarget.setFaction(faction, grade)

            if actionType == 'hire' then
                xTarget.showNotification(TranslateCap('you_have_been_hired', faction))
                xPlayer.showNotification(TranslateCap("you_have_hired", xTarget.getName()))
            elseif actionType == 'promote' then
                xTarget.showNotification(TranslateCap('you_have_been_promoted'))
                xPlayer.showNotification(TranslateCap("you_have_promoted", xTarget.getName(), xTarget.getFaction().label))
            elseif actionType == 'fire' then
                xTarget.showNotification(TranslateCap('you_have_been_fired', xTarget.getFaction().label))
                xPlayer.showNotification(TranslateCap("you_have_fired", xTarget.getName()))
            end

            cb()
        end)

        ESX.RegisterServerCallback('esx_society:setFactionSalary', function(source, cb, faction, grade, salary)
            local xPlayer = ESX.GetPlayerFromId(source)

            if xPlayer.faction.name == faction and xPlayer.faction.grade_name == 'boss' then
                if salary <= Config.MaxSalary then
                    MySQL.update('UPDATE faction_grades SET salary = ? WHERE faction_name = ? AND grade = ?', {salary, faction, grade},
                    function(rowsChanged)
                        Factions[faction].grades[tostring(grade)].salary = salary
                        ESX.RefreshFactions()
                        Wait(1)
                        local xPlayers = ESX.GetExtendedPlayers('faction', faction)
                        for _, xTarget in pairs(xPlayers) do

                            if xTarget.faction.grade == grade then
                                xTarget.setFaction(faction, grade)
                            end
                        end
                        cb()
                    end)
                else
                    print(('[^3WARNING^7] Player ^5%s^7 attempted to setFactionSalary over the config limit for ^5%s^7!'):format(source, faction))
                    cb()
                end
            else
                print(('[^3WARNING^7] Player ^5%s^7 attempted to setFactionSalary for ^5%s^7!'):format(source, faction))
                cb()
            end
        end)

        ESX.RegisterServerCallback('esx_society:setFactionLabel', function(source, cb, faction, grade, label)
            local xPlayer = ESX.GetPlayerFromId(source)

            if xPlayer.faction.name == faction and xPlayer.faction.grade_name == 'boss' then
                    MySQL.update('UPDATE faction_grades SET label = ? WHERE faction_name = ? AND grade = ?', {label, faction, grade},
                    function(rowsChanged)
                        Factions[faction].grades[tostring(grade)].label = label
                        ESX.RefreshFactions()
                        Wait(1)
                        local xPlayers = ESX.GetExtendedPlayers('faction', faction)
                        for _, xTarget in pairs(xPlayers) do

                            if xTarget.faction.grade == grade then
                                xTarget.setFaction(faction, grade)
                            end
                        end
                        cb()
                    end)
            else
                print(('[^3WARNING^7] Player ^5%s^7 attempted to setFactionLabel for ^5%s^7!'):format(source, faction))
                cb()
            end
        end)
        ```

