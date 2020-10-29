
let cdStatus = 1
function cdMove(fx){
    if(fx=="last"){
        if(cdStatus==1) return
        document.getElementsByClassName("new-cd-list-box")[0].style.transform = "translate(0,0)"
        cdStatus++
    }else{
        if(cdStatus==2) return
        document.getElementsByClassName("new-cd-list-box")[0].style.transform = "translate(-715px,0)"
        
        cdStatus--
    }
}