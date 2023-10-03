namespace Utils.Components

open FormUtils

module Movie =

    let movieFields language =
        language |> translateExpression "Filmes" "Movies"

    let dateFormat language =
        language |> translateExpression "dd/MM/yyyy" "MM/dd/yyyy"        
