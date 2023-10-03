namespace Utils.Components

open FormUtils

module Menu =

    let configFields (language: string) =
        language |> translateExpression "Ajustes" "Settings"

    let powerFields (language: string) =
        language |> translateExpression "Desconectar" "Log out"
