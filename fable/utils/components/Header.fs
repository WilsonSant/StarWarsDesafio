namespace Utils.Components

open FormUtils

module Header =

    let guestFields language number = language

    let helloPortuguese (name: string) = $"Olá, {name}"

    let helloEnglish (name: string) = $"Hello, {name}"

    let getHelloMessage isGuest language (name:string) (number: int) =
        let callGuestPT = helloPortuguese $"Visitante{number}"
        let callGuestEnglish = helloEnglish $"Guest{number}"

        if isGuest then
            language |> translateExpression callGuestPT callGuestEnglish
        else
            language |> translateExpression $"Olá, {name}" $"Hello, {name}"

    
        