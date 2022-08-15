

function totalClick(click){
    const totalClicks= document.getElementById('totalClicks')
    const sumvalue= parseInt(totalClicks.value)+click
    totalClicks.value=sumvalue

    if(sumvalue<0){
        totalClicks.value=0
    }
    if(click===0){
        totalClicks.value=0
    }
}


function submit(){
    let firstName=document.getElementById('fname').value
    let lastName=document.getElementById('lname').value
    let age=document.getElementById('totalClicks').value
    let manOrWoman=document.getElementById('option').value
    let titleMan="Herr"
    let titleFrau="Frau"

    if (manOrWoman=="w"){
        manOrWoman=titleFrau
    }else if (manOrWoman=="m") {
        manOrWoman=titleMan
    } else {
        manOrWoman = ''
    }
    let total=`Hallo ${manOrWoman} ${firstName} ${lastName} Sie sind ${age} jahre alt `


    document.getElementById('myTextBox').innerHTML = total
}