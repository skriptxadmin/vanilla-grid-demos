import { VanillaServerGrid } from "@skriptx2/vanillagrid";

window.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");

  drawTable(1);

  async function drawTable(page) {
    const itemsPerPage = 3;

    const url = `https://jsonplaceholder.typicode.com/users/?_page=${page}&_limit=${itemsPerPage}`;

    const response = await fetch(url);
    const users = await response.json();
    const headers = response.headers;
    const trs = users
      .map((user) => {
        return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td></tr>`;
      })
      .join("");
    tbody.innerHTML = trs;

    const instance = new VanillaServerGrid(wrapper, {
      itemsPerPage: itemsPerPage,
      totalItems: headers.get("x-total-count"), // https://github.com/typicode/jsonplaceholder/issues/65
      currentPage: page,
      info: "Showing :start to :end of :total entries",
      classNames: {},
    });

    instance.addEventListener("onPageChange", function ({ detail }) {
      drawTable(detail.pageSelected);
    });
  }
});
