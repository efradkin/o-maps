export default async function loadScript(file: string) {
  const src = "../js/" + file;
  if (document.querySelector(`script[src='${src}']`)) return;
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.setAttribute("src", src);
    script.onload = resolve;
    document.body.appendChild(script);
  });
}
