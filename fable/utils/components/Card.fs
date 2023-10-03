namespace Utils.Components

open FormUtils

module Card =

    type columns =
        { title: string
          dataIndex: string
          key: string }

    type received =
        { portugueseName: string
          englishName: string
          dataIndex: string }

    let createColumns language (list: received array) : columns array =
        Array.map
            (fun object ->
                { title = language |> translateExpression object.portugueseName object.englishName
                  dataIndex = object.dataIndex
                  key = object.dataIndex })
            list


    type objectCard =
        { title: string
          data: float
          columns: columns array
          colorCSS: string
          alt: string
          read: bool
          set: bool
          logo: string }

    let createObjectCard title data columns className alt readState setState image =
        let object =
            { read = readState
              set = setState
              colorCSS = className
              title = title
              logo = image
              data = data
              columns = columns
              alt = alt }

        object
