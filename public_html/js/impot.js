/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function recupMontantImposition(revenue){
    let imposition = 0;
    const tranche1 = 10777;
    const tranche2 = 27478;
    const tranche3 = 78570;
    
    if (revenue <= tranche1){
        return 0;
    }
    else if (revenue <= tranche2){
        imposition = 0.11;
        revenue = revenue-tranche1;
    }
    else if (revenue <= tranche3){
        
    }
    return (revenue*imposition).toFixed(2);
}

