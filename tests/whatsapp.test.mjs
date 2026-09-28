import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createWhatsAppUrl } from '../src/lib/whatsapp.mjs';

test('creates a valid click-to-chat URL and preserves the Spanish message', () => {
  const url = new URL(createWhatsAppUrl());
  assert.equal(url.origin, 'https://wa.me');
  assert.match(url.pathname, /^\/[1-9]\d{7,14}$/);
  assert.equal(url.searchParams.get('text'), 'Hola Alejandro, te contacto desde acde.cl. Me gustaría conversar sobre mi proyecto.');
  assert.deepEqual([...url.searchParams.keys()], ['text']);
});

test('source component does not include the destination number or a direct WhatsApp href', async () => {
  const number = new URL(createWhatsAppUrl()).pathname.slice(1);
  const source = await readFile(new URL('../src/components/WhatsAppButton.tsx', import.meta.url), 'utf8');
  assert.ok(!source.includes(number));
  assert.ok(!source.includes('https://wa.me/'));
});
