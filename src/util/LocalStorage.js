function getItem(key) {
  const value = localStorage.getItem(key);
  return value;
}

function setItem(key, value) {
  localStorage.setItem(key, value);
}

function removeItem(key) {
  localStorage.removeItem(key);
}

export default { getItem, setItem, removeItem };
