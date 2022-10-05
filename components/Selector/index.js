export default class Select extends HTMLElement{
    connectedCallback(){
        let days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
          ];
        let d = new Date();
        let n = d.getDay();

        this.innerHTML = `
            <div class="select">
            <div class="select-input">
                <span class="span-select">${days[n]}</span>
                &#8964;
            </div>
                <div class="select-dropdown">
                    <ul class="select-list">
                        
                    </ul>
                </div>
               
            </div>
        `

    /*
    
    <li class="select-item">Понедельник</li>
    <li class="select-item">Вторник</li>
    <li class="select-item">Среда</li>
    <li class="select-item">Четверг</li>
    <li class="select-item">Пятница</li>
    <li class="select-item">Суббота</li>
    <li class="select-item">Воскресенье</li>
    
    */


        this.style.width = "200px";
        this.style.height = "25px";
        this.style.display = "block";
        this.style.position = "relative"
        this.style.borderRadius = "4px"
        this.style.border = "2px solid lightblue";

        const slt = this.querySelector(".select");
        const sltrDrop = this.querySelector(".select-dropdown");
        const sltrInput = this.querySelector(".select-input")
        const sltrBtn = this.querySelector(".selector-button");
        const sltrUl = this.querySelector(".select-list");
        const sltrItm = this.querySelector(".select-item");


        sltrUl.innerHTML = `
    <li class="select-item">Понедельник</li>
    <li class="select-item">Вторник</li>
    <li class="select-item">Среда</li>
    <li class="select-item">Четверг</li>
    <li class="select-item">Пятница</li>
    <li class="select-item">Суббота</li>
    <li class="select-item">Воскресенье</li>
        
        `


        sltrUl.style.padding = "0px";
        sltrUl.style.margin = "0px";
        sltrUl.style.listStyle = "none";


        sltrInput.style.display = "flex";
        sltrInput.style.alignItems = "center";
        sltrInput.style.cursor = "pointer"
        sltrInput.style.justifyContent = "space-between";

   

        sltrDrop.position = "absolute"
        sltrDrop.style.backgroundColor = "lightblue";
        sltrDrop.style.height = "60px";
        sltrDrop.style.margin = "8px 0 0 0";
        sltrDrop.style.padding = "0 1rem";
        sltrDrop.style.borderRadius = "4px";
        sltrDrop.style.left = "0px";
        sltrDrop.style.right = "0px";
        sltrDrop.style.maxHeight = "200px";
        sltrDrop.style.overflowY = "auto";
        sltrDrop.style.display = "block";
    
   
    }

    openDrop(slt) {
        const sltrDrop = this.querySelector(".select-dropdown");
        if(slt.classList.contains("open")){
            sltrDrop.style.display = "block"
        }else{
            sltrDrop.style.display = "none"
        }
    };





}

