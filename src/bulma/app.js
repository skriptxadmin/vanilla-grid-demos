import { VanillaGrid } from '@skriptx2/vanillagrid';

window.addEventListener('DOMContentLoaded', function(){

    const table1 = document.querySelector("table.table-1");

    new VanillaGrid(table1, {
        itemsPerPage:5,
        info:'Showing :start to :end of :total entries',
        classNames: {
            active:'is-current',
            wrapper: 'is-flex is-justify-content-space-between is-align-items-center',
            nav:"pagination",
            ul: 'pagination-list',
            li:'',
            button:'pagination-link',
        }
    })

    const table2 = document.querySelector("table.table-2");

    new VanillaGrid(table2, {
        itemsPerPage:1,
        info:'Showing :start to :end of :total entries',
        classNames: {
            active:'is-current',
            wrapper: 'is-flex is-justify-content-space-between is-align-items-center',
            nav:"pagination",
            ul: 'pagination-list',
            li:'',
            button:'pagination-link',
            selectDiv:'select',
            select:''
        }
    })

})
