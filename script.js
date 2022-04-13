function positions(firstPlace, secondPlace, lastPlace){
    let array = []
    if (firstPlace == 'Daniel'){
        array[0] = firstPlace
        array[1] = secondPlace
        array[2] = lastPlace
    }
    if (secondPlace == 'Daniel') {
        array[0] = secondPlace
        array[1] = firstPlace
        array[2] = lastPlace
    }
    if (lastPlace == 'Daniel') {
        array[0] = firstPlace
        array[1] = lastPlace
        array[2] = secondPlace
    }
    console.log("1º colocado: " + array[0])
    console.log("2º colocado: " + array[1])
    console.log("3º colocado: " + array[2])
    
}
positions('Daniel', 'Rafael', 'Manoel')
positions('Rafael', 'Daniel', 'Manoel')
positions('Rafael', 'Manoel', 'Daniel')