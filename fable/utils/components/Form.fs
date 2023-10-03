namespace Utils.Components

module FormUtils =

    let translateExpression (portugueseName: string) (englishName: string) language =
        if language = "pt-br" then portugueseName else englishName

    let translateMessageExpression (language: string) (field: string) =
        language
        |> translateExpression $"Por favor, insira {field}" $"Please, enter {field}"

    type requiredFields = { required: bool; message: string }

    let createRulesRequired (language: string) (field: string) =
        let rules =
            [| { required = true
                 message = translateMessageExpression language field } |]

        rules
