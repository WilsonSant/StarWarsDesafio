namespace Utils
open System

module Guest =
 let generateRandomNumber () =
    Random().Next(1,100)