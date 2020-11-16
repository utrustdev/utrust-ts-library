import hmacSHA256 from 'crypto-js/hmac-sha256';
import hex from 'crypto-js/enc-hex';

import { Event } from './types';

const WebhookValidator = (webhookSecret: string) => {
  const validateSignature = ({
    event_type,
    resource: { amount, currency, reference },
    state,
    signature: eventSignature,
  }: Event): boolean => {
    const joinedPayload = [
      `event_type${event_type}`,
      `resourceamount${amount}`,
      `resourcecurrency${currency}`,
      `resourcereference${reference}`,
      `state${state}`,
    ].join();
    const signedPayload = hmacSHA256(joinedPayload, webhookSecret);
    const signature = hex.stringify(signedPayload);

    return signature === eventSignature;
  };

  return { validateSignature };
};

export default WebhookValidator;
