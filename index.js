const record = [
    {   year: "2015", 
        result: "W"
    },
    {   year: "2014", 
        result: "N/A"
    },
    {   year: "2013", 
        result: "L"
    },    
]

function superbowlWin(record){
    const winning = record.find(function(record){
        return record.result === "W"

    }) 
    if (winning){
        return winning.year;
    }else if (winning !== "W"){
        return undefined

    }
}