import { Filter } from "../../types";

const MAP_TYPES = [
  { id: "ORIENT", name: "Ориент" },
  { id: "ROGAINE", name: "Рогейн" },
  { id: "SPECIAL", name: "Специальные" },
];

type Props = {
  filter: Filter;
  onChangeFilter: (filter: Filter) => void;
};

export default function mountSidebar({ filter, onChangeFilter }: Props) {
  const html = `
    <div class="sidebar">
      ${MAP_TYPES.map(
        ({ id, name }) => `
        <div>
          <input id="mapType-${id}" type="radio" name="mapType" value="${id}" ${
          filter.mapType === id ? "checked" : ""
        } />
          <label for="mapType-${id}">${name}</label>
        </div>
      `
      ).join("")}
    </div>
  `;

  document.getElementById("sidebar-container")!.innerHTML = html;

  document.querySelectorAll(".sidebar input[type='radio']").forEach((input) => {
    input.addEventListener("change", (e) => {
      const { name, value } = e.target as HTMLInputElement;
      onChangeFilter({ ...filter, [name]: value });
    });
  });
}
