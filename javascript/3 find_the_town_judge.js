// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

-------------------------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let Person ={} ;
    let judge = 0;
    let count = 0;
    
    for(let i = 1; i<=n;i++){
        Person[i] = i;
    }
    
    for(let j=0;j<trust.length;j++){
        if(Person.hasOwnProperty(trust[j][0])){
            delete Person[trust[j][0]];
        }
    }
        
    judge = Object.keys(Person);
        
    if(judge.length< 1 || judge.length> 1){
        return -1
    } else{
        judge = parseInt(judge);
        for(let k = 0; k<trust.length;k++){
            if(trust[k][1] == judge) count++;
        }
        if(count == n-1)return judge
        else return -1; 
    }   
};
