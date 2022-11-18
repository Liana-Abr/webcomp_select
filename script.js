/*
    Выпадающий список
    My select типо название
    <my s>
    data =“1,2,3,4”
    </>
    Выпадающий день недели выбор дня недели в списке
*/
import Select from "./components/Selector/index.js";

if (!customElements.get("la-select")) {
    customElements.define("la-select", Select);
}

