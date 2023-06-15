function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

  // Logica da função que o toggle fez //
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  const img = document.querySelector('#profile img')
  
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png',)
    img.setAttribute('alt', 'avatar foto modo light');
  } else {
      img.setAttribute('src', './assets/avatar.png')
      img.setAttribute('alt', 'Imagem do perfil');
  }
}