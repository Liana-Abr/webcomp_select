/*
    Выпадающий список
    My select типо название
    <my s>
    data =“1,2,3,4”
    </>
    Выпадающий день недели выбор дня недели в списке
*/
import Select from "./components/Selector/index.js";

if (!customElements.get("my-selector")) {
    customElements.define("my-selector", Select);
}

