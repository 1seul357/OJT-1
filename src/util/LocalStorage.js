function getItem(key) {
  const value = localStorage.getItem(key);
  return value;
}

function setItem(key, value) {
  localStorage.setItem(key, value);
}

export default { getItem, setItem };
