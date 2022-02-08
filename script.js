const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClassses()
    panel.classList.add('active')
  })
})

const removeActiveClassses = function () {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

console.log(panels)
