"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[559],{5316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=t(7462),l=(t(7294),t(3905)),s=t(4866),o=t(5162),i=t(3612);const r={sidebar_position:1},u="client/main.lua",c={unversionedId:"esx_legacy/doublejob/esx_society/client",id:"esx_legacy/doublejob/esx_society/client",title:"client/main.lua",description:"Automatisation du client pour les faction (menu boss)",source:"@site/docs/esx_legacy/doublejob/esx_society/client.md",sourceDirName:"esx_legacy/doublejob/esx_society",slug:"/esx_legacy/doublejob/esx_society/client",permalink:"/docs/esx_legacy/doublejob/esx_society/client",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/esx_legacy/doublejob/esx_society/client.md",tags:[],version:"current",lastUpdatedAt:1675558994,formattedLastUpdatedAt:"Feb 5, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"esx_legacy",previous:{title:"server/main.lua",permalink:"/docs/esx_legacy/doublejob/es_extended/server"},next:{title:"server/main.lua",permalink:"/docs/esx_legacy/doublejob/esx_society/server"}},m={},p=[],d={toc:p},f="wrapper";function y(e){let{components:n,...t}=e;return(0,l.kt)(f,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clientmainlua"},"client/main.lua"),(0,l.kt)("p",null,"Automatisation du client pour les faction (menu boss)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Pour commencez vous devrez ajouter ceci tout en haut du fichier :")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local eventName <const> = {\n    ['job'] = {\n        set = 'setJob',\n        get = 'getJob',\n        label = 'setJobLabel',\n        salary = 'setJobSalary',\n    },\n\n    ['faction'] = {\n        set = 'setFaction',\n        get = 'getFaction',\n        label = 'setFactionLabel',\n        salary = 'setFactionSalary',\n    }\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Vous devez remplacer enti\xe8rement tout les fonctions que vous trouverez ci-dessous :")),(0,l.kt)(i.Z,{type:"caution",icon:"\u26a0\ufe0f",title:"Attention!",mdxType:"Admonition"},(0,l.kt)("p",null,"Vous avez une slider pour naviguer horizontalement en dessous")),(0,l.kt)(i.Z,{type:"note",icon:"\ud83d\udcdd",title:"Liste des fonctions",mdxType:"Admonition"},(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"OpenBossMenu",label:"OpenBossMenu",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'function OpenBossMenu(society, close, options)\n    options = options or {}\n    local elements = {\n        {unselectable = true, icon = "fas fa-user", title = TranslateCap(\'boss_menu\')}\n    }\n\n    ESX.TriggerServerCallback(\'esx_society:isBoss\', function(isBoss, selected)\n        if isBoss then\n            local defaultOptions = {\n                checkBal = true,\n                withdraw = true,\n                deposit = true,\n                wash = true,\n                employees = true,\n                salary = true,\n                grades = true\n            }\n\n            for k,v in pairs(defaultOptions) do\n                if options[k] == nil then\n                    options[k] = v\n                end\n            end\n\n            if options.checkBal then\n                elements[#elements+1] = {icon = "fas fa-wallet", title = TranslateCap(\'check_society_balance\'), value = "check_society_balance"}\n            end\n            if options.withdraw then\n                elements[#elements+1] = {icon = "fas fa-wallet", title = TranslateCap(\'withdraw_society_money\'), value = "withdraw_society_money"}\n            end\n            if options.deposit then\n                elements[#elements+1] = {icon = "fas fa-wallet", title = TranslateCap(\'deposit_society_money\'), value = "deposit_money"}\n            end\n            if options.wash then\n                elements[#elements+1] = {icon = "fas fa-wallet", title = TranslateCap(\'wash_money\'), value = "wash_money"}\n            end\n            if options.employees then\n                elements[#elements+1] = {icon = "fas fa-users", title = TranslateCap(\'employee_management\'), value = "manage_employees"}\n            end\n            if options.salary then\n                elements[#elements+1] = {icon = "fas fa-wallet", title = TranslateCap(\'salary_management\'), value = "manage_salary"}\n            end\n            if options.grades then\n                elements[#elements+1] = {icon = "fas fa-scroll", title = TranslateCap(\'grade_management\'), value = "manage_grades"}\n            end\n\n            ESX.OpenContext("right", elements, function(menu,element)\n                if element.value == "check_society_balance" then\n                    TriggerServerEvent(\'esx_society:checkSocietyBalance\', society)\n                elseif element.value == "withdraw_society_money" then\n                    local elements = {\n                        {unselectable = true, icon = "fas fa-wallet", title = TranslateCap(\'withdraw_amount\'), description = "Withdraw money from the society account"},\n                        {icon = "fas fa-wallet", title = "Amount", input = true, inputType = "number", inputPlaceholder = "Amount to withdraw..", inputMin = 1, inputMax = 250000, name = "withdraw"},\n                        {icon = "fas fa-check", title = "Confirm", value = "confirm"},\n                        {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n                    }\n                    ESX.RefreshContext(elements)\n                elseif element.value == "confirm" then\n                    local amount = tonumber(menu.eles[2].inputValue)\n                    if amount == nil then\n                        ESX.ShowNotification(TranslateCap(\'invalid_amount\'))\n                    else\n                        TriggerServerEvent(\'esx_society:withdrawMoney\', society, amount)\n                        ESX.CloseContext()\n                    end\n                elseif element.value == "deposit_money" then\n                    local elements = {\n                        {unselectable = true, icon = "fas fa-wallet", title = TranslateCap(\'deposit_amount\'), description = "Deposit some money into the society account"},\n                        {icon = "fas fa-wallet", title = "Amount", input = true, inputType = "number", inputPlaceholder = "Amount to deposit..", inputMin = 1, inputMax = 250000, name = "deposit"},\n                        {icon = "fas fa-check", title = "Confirm", value = "confirm2"},\n                        {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n                    }\n                    ESX.RefreshContext(elements)\n                elseif element.value == "confirm2" then\n                    local amount = tonumber(menu.eles[2].inputValue)\n                    if amount == nil then\n                        ESX.ShowNotification(TranslateCap(\'invalid_amount\'))\n                    else\n                        TriggerServerEvent(\'esx_society:depositMoney\', society, amount)\n                        ESX.CloseContext()\n                    end\n                elseif element.value == "wash_money" then\n                    local elements = {\n                        {unselectable = true, icon = "fas fa-wallet", title = TranslateCap(\'wash_money_amount\'), description = "Deposit some money into the money wash"},\n                        {icon = "fas fa-wallet", title = "Amount", input = true, inputType = "number", inputPlaceholder = "Amount to wash..", inputMin = 1, inputMax = 250000, name = "wash"},\n                        {icon = "fas fa-check", title = "Confirm", value = "confirm3"},\n                        {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n                    }\n                    ESX.RefreshContext(elements)\n                elseif element.value == "confirm3" then\n                    local amount = tonumber(menu.eles[2].inputValue)\n                    if amount == nil then\n                        ESX.ShowNotification(TranslateCap(\'invalid_amount\'))\n                    else\n                        TriggerServerEvent(\'esx_society:washMoney\', society, amount)\n                        ESX.CloseContext()\n                    end\n                elseif element.value == "manage_employees" then\n                    OpenManageEmployeesMenu(society, options, selected)\n                elseif element.value == "manage_salary" then\n                    OpenManageSalaryMenu(society, options, selected)\n                elseif element.value == "manage_grades" then\n                    OpenManageGradesMenu(society, options, selected)\n                elseif element.value == "return" then\n                    OpenBossMenu(society, nil, options, selected)\n                end\n            end)\n        end\n    end, society)\nend\n'))),(0,l.kt)(o.Z,{value:"OpenManageEmployeesMenu",label:"OpenManageEmployeesMenu",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'function OpenManageEmployeesMenu(society, options, selected)\n    local elements = {\n        {unselectable = true, icon = "fas fa-users", title = TranslateCap(\'employee_management\')},\n        {icon = "fas fa-users", title = TranslateCap(\'employee_list\'), value = "employee_list"},\n        {icon = "fas fa-users", title = TranslateCap(\'recruit\'), value = "recruit"}\n    }\n    \n    elements[#elements+1] = {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n    \n    ESX.OpenContext("right", elements, function(menu,element)\n        if element.value == "employee_list" then\n            OpenEmployeeList(society, options, selected)\n        elseif element.value == "recruit" then\n            OpenRecruitMenu(society, options, selected) \n        elseif element.value == "return" then\n            OpenBossMenu(society, nil, options, selected)\n        end\n    end)\nend\n'))),(0,l.kt)(o.Z,{value:"OpenEmployeeList",label:"OpenEmployeeList",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'function OpenEmployeeList(society, options, selected)\n    ESX.TriggerServerCallback(\'esx_society:getEmployees\', function(employees)\n        local elements = {\n            {unselectable = true, icon = "fas fa-user", title = "Employees"}\n        }\n\n        for i=1, #employees, 1 do\n            local gradeLabel = (employees[i][selected].grade_label == \'\' and employees[i][selected].label or employees[i][selected].grade_label)\n\n            elements[#elements+1] = {icon = "fas fa-user", title = employees[i].name .. " | " ..gradeLabel, gradeLabel = gradeLabel, data = employees[i]}\n        end\n\n        elements[#elements+1] = {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n\n        ESX.OpenContext("right", elements, function(menu,element) \n            if element.value == "return" then\n                OpenManageEmployeesMenu(society, options)\n            else\n                local elements2 = {\n                    {unselectable = true, icon = "fas fa-user", title = element.title},\n                    {icon = "fas fa-user", title = "Promote", value = "promote"},\n                    {icon = "fas fa-user", title = "Fire", value = "fire"},\n                    {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n                }\n                ESX.OpenContext("right", elements2, function(menu2,element2)\n                    local employee = element.data\n                    if element2.value == "promote" then\n                        ESX.CloseContext()\n                        OpenPromoteMenu(society, employee, options, selected)\n                    elseif element2.value == "fire" then\n                        ESX.ShowNotification(TranslateCap(\'you_have_fired\', employee.name))\n\n                        ESX.TriggerServerCallback(eventName[selected].set, function()\n                            OpenEmployeeList(society, options, selected)\n                        end, employee.identifier, \'unemployed\', 0, \'fire\')\n                    elseif element2.value == "return" then\n                        OpenEmployeeList(society, options, selected)\n                    end\n                end)\n            end\n        end)\n    end, society)\nend\n'))),(0,l.kt)(o.Z,{value:"OpenRecruitMenu",label:"OpenRecruitMenu",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'function OpenRecruitMenu(society, options, selected)\n    ESX.TriggerServerCallback(\'esx_society:getOnlinePlayers\', function(players)\n        local elements = {\n            {unselectable = true, icon = "fas fa-user", title = TranslateCap(\'recruiting\')}\n        }\n\n        for i=1, #players, 1 do\n            if players[i][selected].name ~= society then\n                elements[#elements+1] = {icon = "fas fa-user", title = players[i].name, value = players[i].source, name = players[i].name, identifier = players[i].identifier}\n            end\n        end\n\n        elements[#elements+1] = {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n\n        ESX.OpenContext("right", elements, function(menu,element)\n            if element.value == "return" then\n                OpenManageEmployeesMenu(society, options, selected)\n            else\n                local elements2 = {\n                    {unselectable = true, icon = "fas fa-user", title = "Confirm"},\n                    {icon = "fas fa-times", title = TranslateCap(\'no\'), value = "no"},\n                    {icon = "fas fa-check", title = TranslateCap(\'yes\'), value = "yes"},\n                }\n                ESX.OpenContext("right", elements2, function(menu2,element2)\n                    if element2.value == "yes" then\n                        ESX.ShowNotification(TranslateCap(\'you_have_hired\', element.name))\n\n                        ESX.TriggerServerCallback(eventName[selected].set, function()\n                            OpenRecruitMenu(society, options, selected)\n                        end, element.identifier, society, 0, \'hire\')\n                    end\n                end)\n            end\n        end)\n    end)\nend\n'))),(0,l.kt)(o.Z,{value:"OpenPromoteMenu",label:"OpenPromoteMenu",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'function OpenPromoteMenu(society, employee, options, selected)\n\n    ESX.TriggerServerCallback(eventName[selected].get, function(data)\n        if not data then\n            return\n        end\n\n        local elements = {\n            {unselectable = true, icon = "fas fa-user", title = TranslateCap(\'promote_employee\', employee.name)}\n        }\n\n        for i=1, #data.grades, 1 do\n            local gradeLabel = (data.grades[i].label == \'\' and data.label or data.grades[i].label)\n\n            elements[#elements+1] = {icon = "fas fa-user", title = gradeLabel, value = data.grades[i].grade, selected = (employee[selected].grade == data.grades[i].grade)}\n        end\n\n        elements[#elements+1] = {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n\n        ESX.OpenContext("right", elements, function(menu,element)\n            if element.value == "return" then\n                OpenEmployeeList(society, options, selected)\n            else\n                ESX.ShowNotification(TranslateCap(\'you_have_promoted\', employee.name, element.title))\n\n                ESX.TriggerServerCallback(eventName[selected].set, function()\n                    OpenEmployeeList(society, options, selected)\n                end, employee.identifier, society, element.value, \'promote\')\n            end\n        end, function(menu)\n            OpenEmployeeList(society, options, selected)\n        end)\n    end, society)\nend\n'))),(0,l.kt)(o.Z,{value:"OpenManageSalaryMenu",label:"OpenManageSalaryMenu",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'function OpenManageSalaryMenu(society, options, selected)\n    ESX.TriggerServerCallback(eventName[selected].get, function(data)\n        if not data then\n            return\n        end\n\n        local elements = {\n            {unselectable = true, icon = "fas fa-wallet", title = TranslateCap(\'salary_management\')}\n        }\n\n        for i=1, #data.grades, 1 do\n            local gradeLabel = (data.grades[i].label == \'\' and data.label or data.grades[i].label)\n\n            elements[#elements+1] = {\n                icon = "fas fa-wallet",\n                title = (\'%s - <span style="color:green;">%s</span>\'):format(gradeLabel, TranslateCap(\'money_generic\', ESX.Math.GroupDigits(data.grades[i].salary))),\n                value = data.grades[i].grade\n            }\n        end\n            \n        elements[#elements+1] = {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n\n        ESX.OpenContext("right", elements, function(menu,element)\n            local elements = {\n                {unselectable = true, icon = "fas fa-wallet", title = element.title, description = "Change a grade salary amount", value = element.value},\n                {icon = "fas fa-wallet", title = "Amount", input = true, inputType = "number", inputPlaceholder = "Amount to change grade salary..", inputMin = 1, inputMax = Config.MaxSalary, name = "gradesalary"},\n                {icon = "fas fa-check", title = "Confirm", value = "confirm"}\n            }\n\n            ESX.RefreshContext(elements)\n            if element.value == "confirm" then\n                local amount = tonumber(menu.eles[2].inputValue)\n\n                if amount == nil then\n                    ESX.ShowNotification(TranslateCap(\'invalid_value_nochanges\'))\n                    OpenManageSalaryMenu(society, options, selected)\n                elseif amount > Config.MaxSalary then\n                    ESX.ShowNotification(TranslateCap(\'invalid_amount_max\'))\n                    OpenManageSalaryMenu(society, options, selected)\n                else\n                    ESX.CloseContext()\n                    ESX.TriggerServerCallback(eventName[selected].salary, function()\n                        OpenManageSalaryMenu(society, options, selected)\n                    end, society, menu.eles[1].value, amount)\n                end\n            elseif element.value == "return" then\n                OpenBossMenu(society, nil, options, selected)\n            end\n        end)\n    end, society)\nend\n'))),(0,l.kt)(o.Z,{value:"OpenManageGradesMenu",label:"OpenManageGradesMenu",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'function OpenManageGradesMenu(society, options, selected)\n    ESX.TriggerServerCallback(eventName[selected].get, function(data)\n        if not data then\n            return\n        end\n\n        local elements = {\n            {unselectable = true, icon = "fas fa-wallet", title = TranslateCap(\'grade_management\')}\n        }\n\n        for i=1, #data.grades, 1 do\n            local gradeLabel = (data.grades[i].label == \'\' and data.label or data.grades[i].label)\n\n            elements[#elements+1] = {icon = "fas fa-wallet", title = (\'%s\'):format(gradeLabel), value = data.grades[i].grade}\n        end\n            \n        elements[#elements+1] = {icon = "fas fa-arrow-left", title = "Return", value = "return"}\n\n        ESX.OpenContext("right", elements, function(menu,element)\n            local elements = {\n                {unselectable = true, icon = "fas fa-wallet", title = element.title, description = "Change a grade label", value = element.value},\n                {icon = "fas fa-wallet", title = "Label", input = true, inputType = "text", inputPlaceholder = ("Label to change %s grade label.."):format(selected), name = "gradelabel"},\n                {icon = "fas fa-check", title = "Confirm", value = "confirm"}\n            }\n\n            ESX.RefreshContext(elements)\n            if element.value == "confirm" then\n                if menu.eles[2].inputValue then\n                    local label = tostring(menu.eles[2].inputValue)\n\n                    ESX.TriggerServerCallback(eventName[selected].label, function()\n                    OpenManageGradesMenu(society, options, selected)\n                end, society, menu.eles[1].value, label)\n                else\n                    ESX.ShowNotification(TranslateCap(\'invalid_value_nochanges\'))\n                    OpenManageGradesMenu(society, options, selected)\n                end\n            elseif element.value == "return" then\n                OpenBossMenu(society, nil, options, selected)\n            end\n        end)\n    end, society)\nend\n'))))))))}y.isMDXComponent=!0}}]);