import { setPrefill } from "./prefill";

// export function scrollToSection(e, id) {
//   e.preventDefault();
//   const NAV_HEIGHT = 80; // adjust to your header height
//   const el = document.getElementById(id);
//   if (!el) return;
//   const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
//   window.scrollTo({ top: y, behavior: "smooth" });
//   window.history.pushState(null, "", `#${id}`);
// }

export function scrollToSection(e, id, prefill) {
  e?.preventDefault?.();
  if (prefill) setPrefill(prefill);

  const NAV_HEIGHT = 80; // adjust if needed
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
  window.scrollTo({ top: y, behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
}
