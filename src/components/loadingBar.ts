export function hideLoadingBar() {
  const loadingBar = document.querySelector<HTMLDivElement>(".loading-bar")!;
  loadingBar.style.display = "none";
}
