/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function recupMontantImposition(revenue){
    let imposition = 0;
    const tranche1 = 10777;
    
    if (revenue <= tranche1){
        imposition = 0
    }
    return imposition;
}

