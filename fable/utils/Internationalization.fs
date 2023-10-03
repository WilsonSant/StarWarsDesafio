namespace Utils.Internationalization

module Internationalization =

    let validateLanguage (responsePortuguese: string) responseEnglish current =
        if current = "pt-br" then
            responseEnglish
        else
            responsePortuguese

    let changeLanguage (current: string) =
        current |> validateLanguage "pt-br" "en-us"

    let changeIcon (current: string) =
        current
        |> validateLanguage "/united-states-flag-icon.svg" "/brazil-flag-icon.svg"
