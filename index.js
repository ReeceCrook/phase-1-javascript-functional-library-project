function myEach(collection, callback) {
    for (let accessor in collection) {
        callback(collection[accessor])
    }

    return collection
}

function myMap(collection, callback){
    let arr = []
    for (let accessor in collection){
        arr.push(callback(collection[accessor]))
    }
    return arr
}

function myReduce(collection, callback, acc){
    let reducedCollection = 0
    for(let accessor in collection){
        reducedCollection += collection[accessor]
    }
    
    if (acc === undefined){
        if(collection[0] === undefined){
            let newReduced = reducedCollection - collection.one
            return callback(collection.one, newReduced, collection)
        }else{
            let newReduced = reducedCollection - collection[0]
            return callback(collection[0], newReduced, collection)
        }
    }   
    else{
       return callback(acc, reducedCollection, collection)
    }   
}

function myFind(collection, predicate){
    for(let accessor in collection){
        if(predicate(collection[accessor]) === true){
            return collection[accessor]
        }
    }
}

function myFilter(collection, predicate){
    let trueCollection = []
    for(let accessor in collection){
        if(predicate(collection[accessor]) === true){
            trueCollection.push(collection[accessor])
        }
    }
    return trueCollection
}

function mySize(collection){
    let collectionSize = []
    for(let accessor in collection){
        collectionSize.push((collection[accessor]))
        
    }
    return collectionSize.length
}

function myFirst(array, n){
    let newArr = []
    if(n === undefined){
        n = 0.5
        for(let i = 0; i < n; i++){
            newArr.push(array[i])
        }
        return parseInt(newArr)
    }else{
        for(let i = 0; i < n; i++){
            newArr.push(array[i])
        }
        return newArr
    }
}

function myLast(array, n){
    let newArr = []
    if(n === undefined){
       return array[array.length - 1]
    }else{
        for(let i = 0; i < n; i++){
            newArr.push(array.pop())
        }
        return newArr.reverse()
    }
}

function myKeys(object){
    let arr = []
    for(let accessor in object){
        arr.push(accessor)
    }
    return arr
}

function myValues(object){
    let arr = []
    for(let accessor in object){
        arr.push(object[accessor])
    }
    return arr
}