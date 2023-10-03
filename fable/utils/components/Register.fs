namespace Utils.Components

open FormUtils


module Register =

    let userFields (language: string) =
        language |> translateExpression "Usuário" "Username"

    let getUserFields (language: string) =
        language |> userFields |> createRulesRequired language

    let passwordFields (language: string) =
        language |> translateExpression "Senha" "Password"

    let getPasswordFields (language: string) =
        language |> passwordFields |> createRulesRequired language

    let guestButtonFields (language: string) =
        language |> translateExpression "Entrar como visitante" "Enter as Guest"

    let commonButtonField (language: string) =
        language |> translateExpression "Entrar" "Enter"

    let getFooterButtonsField (guest: bool) language =
        if guest then
            language |> guestButtonFields
        else
            language |> commonButtonField
