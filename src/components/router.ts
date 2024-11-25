import { debounce } from "lodash";

let nextRoute: string | null = null;

const updateRoute = debounce(() => {
  window.history.pushState("", "", nextRoute);
}, 10);

export default function navigate(route: string) {
  nextRoute = route;
  updateRoute();
}
