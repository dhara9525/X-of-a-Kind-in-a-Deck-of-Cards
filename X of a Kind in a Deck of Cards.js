// Long Javascript JS solution, faster than 86.45% of JavaScript online submissions 

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) 
{
    var length=deck.length, retBool=true;
    var myMap=new Map();
    
    for(var i=0; i<length; i++)
    {
        if(myMap.get(deck[i]) == undefined)
        {
            myMap.set(deck[i],1);
        }
        else
        {
            myMap.set(deck[i],myMap.get(deck[i])+1);
        }
    }
    
    for(var i=0; i<1; i++)
    {
        var uniqueVal=myMap.get(deck[i]);
    }
    
    if(uniqueVal==1)
    {
        retBool=false;
        return retBool;
    }
    
    myMap.forEach(function(value,key)
    {
        if(value!=uniqueVal && uniqueVal%2==0 && value%2==0)
            return;
        
        if(value!=uniqueVal && uniqueVal%3==0 && value%3==0)
            return;
        
        if(value!=uniqueVal && uniqueVal%5==0 && value%5==0)
            return;

        if(value!=uniqueVal && ((value/uniqueVal)!=uniqueVal))
        {
            retBool=false;
            return retBool;
        }
    })
    return retBool;
};