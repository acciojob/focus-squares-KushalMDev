let squares=document.querySelectorAll(".square")
squares.forEach((square,index)=>{
    square.addEventListener("mouseenter",(eventDetails)=>{
        let boxId=eventDetails.target.id
        squares.forEach(boxes=>{
            if(boxes.id!=boxId){
                boxes.classList.remove("square")
                boxes.classList.add("coffee")
            }
        })
       
    })

    square.addEventListener("mouseleave",(eventDetails)=>{
        squares.forEach(boxes=>{
            boxes.classList.remove("coffee")
            boxes.classList.add("square")
        })
    })
})
