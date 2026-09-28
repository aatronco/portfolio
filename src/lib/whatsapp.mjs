// Encoding keeps the literal phone number out of initial HTML and source text.
// This is obfuscation, not encryption: visitors can recover the destination.
const encodedContact = 'NTY5MjYzODgzNjU=';

export function createWhatsAppUrl() {
  const url = new URL(`https://wa.me/${atob(encodedContact)}`);
  url.searchParams.set('text', 'Hola Alejandro, te contacto desde acde.cl. Me gustaría conversar sobre mi proyecto.');
  return url.href;
}
