import { Currency, EventType, EventState } from '../types';
import { WebhookValidator } from '../index';

const webhookPayload = {
  event_type: <EventType>'ORDER.PAYMENT.RECEIVED',
  resource: {
    reference: '1400012634',
    amount: '10.90',
    currency: <Currency>'EUR',
  },
  signature: '2a4935bffee9338d1b32f4a3474e0eff285bad03141422bb78c5131af6b45870',
  state: <EventState>'completed',
};

test('Correcty validates webhook payload', () => {
  const { validateSignature } = WebhookValidator('u_test_webhooks_a1df76bf-fccc-4e3a-a575-268db810ac2b');
  expect(validateSignature(webhookPayload)).toBeTruthy();
});

test('Identifies invalid signature', () => {
  const { validateSignature } = WebhookValidator('u_test_webhooks_a1df76bf-fccc-4e3a-a575-268db810ac2b');
  const payload = { ...webhookPayload, state: <EventState>'cancelled' };
  expect(validateSignature(payload)).toBeFalsy();
});
