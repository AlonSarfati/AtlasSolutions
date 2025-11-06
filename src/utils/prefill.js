// Save info before scrolling, so the contact form can read it
export function setPrefill(data) {
  sessionStorage.setItem("atlas_prefill", JSON.stringify(data));
}

export function getPrefill() {
  try {
    return JSON.parse(sessionStorage.getItem("atlas_prefill") || "{}");
  } catch {
    return {};
  }
}

export function clearPrefill() {
  sessionStorage.removeItem("atlas_prefill");
}
