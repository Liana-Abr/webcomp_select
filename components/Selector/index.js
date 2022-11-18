export default class Select extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {   
//сам селектор
        let selector = document.createElement('div');
        selector.style.width = "100px";
        selector.style.height = "25px";
        selector.style.display = "block";
        
        selector.style.borderRadius = "4px"
        selector.style.border = "2px solid lightblue";
        selector.style.display = 'inline-block';
        selector.style.minHeight = '16px';
        selector.style.borderRadius = '3px';
        selector.style.cursor = "pointer";
        

//значение в селекторе
        let value = document.createElement('div');
        selector.appendChild(value);
        let WeekList = document.createElement('div');
        WeekList.style.display = 'none';
        WeekList.style.backgroundColor = 'lightblue';
        WeekList.style.border = '2px solid lightblue';
        WeekList.style.borderTop = "1px solid white"
        WeekList.style.margin = "10px 0 0 0"
        WeekList.style.borderRadius = '3px';
        WeekList.style.zIndex = 99;
        WeekList.style.cursor = "pointer";
        
        
        let values = this.attributes.values.value.split(" ");
            for (let i = 0; i < values.length; i++) {
                let ChosenValue = document.createElement('div');
                ChosenValue.innerText = values[i];
                
                ChosenValue.onclick = function (e) {
                    value.innerHTML = this.innerHTML;
                    WeekList.style.display = 'none';
                    this.value = this.innerText;
                    e.stopPropagation();
                }
                WeekList.appendChild(ChosenValue);
            }
    
        selector.appendChild(WeekList);
        selector.onclick = function () {
            WeekList.style.display = 'block';
        }
        this.appendChild(selector);
    }
}
customElements.define('la-select', Select);

