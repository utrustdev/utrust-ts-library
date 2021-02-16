import { Currency, EventType, EventState } from '../types';
import { WebhookValidator } from '../index';

const webhookPayload = {
  event_type: <EventType>'ORDER.PAYMENT.RECEIVED',
  resource: {
    reference: '1400012634',
    amount: '10.90',
    currency: <Currency>'EUR',
  },
  signature: 'da5d46662744c63f3f22fc1f35243189d46c4721a7d4f7d4ee8216cf809bf16a',
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
