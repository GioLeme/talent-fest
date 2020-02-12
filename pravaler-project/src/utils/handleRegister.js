export function saveInLocalStorage(data) {
  const savedData = getInLocalStorage();
  if (savedData) {
    return localStorage.setItem(
      "register",
      JSON.stringify({ ...savedData, ...data })
    );
  }
  localStorage.setItem("register", JSON.stringify(data));
}

export function getInLocalStorage() {
  return JSON.parse(localStorage.getItem("register"));
}

export function removeLocalStorage() {
  localStorage.removeItem("register");
}

export default {saveInLocalStorage, removeLocalStorage, getInLocalStorage}
