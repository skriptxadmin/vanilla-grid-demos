import { VanillaGrid } from "@skriptx2/vanillagrid";

window.addEventListener("DOMContentLoaded", function () {
  const table1 = document.querySelector("table.table-1");

  new VanillaGrid(table1, {
    itemsPerPage: 10,
    info: "Showing :start to :end of :total entries",
    classNames: {
      wrapper: "d-flex justify-content-between align-items-center",
      ul: "pagination",
      li: "page-item",
      button: "page-link",
      select: "form-select",
    },
  });

  const table2 = document.querySelector("table.table-2");

  new VanillaGrid(table2, {
    itemsPerPage: 1,
    info: "Showing :start to :end of :total entries",
    classNames: {
      wrapper: "d-flex justify-content-between align-items-center",
      ul: "pagination",
      li: "page-item",
      button: "page-link",
      select: "form-select",
    },
  });
});
