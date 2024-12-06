function goBack() {
  window.history.back();
}

function logOut() {
  localStorage.removeItem("token");
  location.href = "https://cmpt-276-fall-2024.github.io/Euterpe/";
}
