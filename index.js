function getFirstSelector(selector) {
    const a = document.querySelector(selector)
    return a
}

function nestedTarget() {
  const a = document.querySelector('div#nested div.target')
  return a
}
