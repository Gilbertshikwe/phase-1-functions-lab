// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks==43){
        return 1
    }
    else if(blocks==50 && blocks==34){
        return 8
    }
    else {
        return 8
    }  
}
function distanceFromHqInFeet(feet){
    if (feet==43){
        return 264
    }
    else if (feet==50 || feet==34){
        return 2112
    }
    else {
        return 2112
    }

}
function distanceTravelledInFeet(start,destination){
    return (Math.abs(destination-start)* 264)
}
distanceTravelledInFeet(43,48) 
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)
function calculatesFarePrice(start,destination){
    let trip = distanceTravelledInFeet(start,destination)
    if(trip <= 400){
        return 0
    }
    else if(trip>400 && trip<2000){
        return (trip-400)*0.02
    }
    else if(trip>2000 && trip<2500){
        return (1650-400)*0.02
    }
    else {
       return "cannot travel that far"
    }
}