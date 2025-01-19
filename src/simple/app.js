import { VanillaGrid } from '@skriptx2/vanillagrid';

window.addEventListener('DOMContentLoaded', function(){

    const table = document.querySelector("table");

    new VanillaGrid(table, {
        itemsPerPage:4,
        info:'Showing :start to :end of :total entries',
    })

})
