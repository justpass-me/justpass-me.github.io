const passkeyButton = document.querySelector('#passkey-button')
const demoStatus = document.querySelector('#demo-status')

passkeyButton?.addEventListener('click', () => {
  passkeyButton.classList.add('success')
  passkeyButton.innerHTML = '<span aria-hidden="true">✓</span> Passkey verified'
  demoStatus.textContent = 'You are securely signed in.'
})
