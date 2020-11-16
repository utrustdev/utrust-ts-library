/**
 * Order types
 */
export type Currency =
  | 'AED'
  | 'ARS'
  | 'AUD'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'CZK'
  | 'DKK'
  | 'DOP'
  | 'EUR'
  | 'GBP'
  | 'HKD'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'JPY'
  | 'KRW'
  | 'MYR'
  | 'MXN'
  | 'NOK'
  | 'NZD'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'RON'
  | 'RUB'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TWD'
  | 'USD'
  | 'ZAR';
export type AmountDetails = {
  subtotal?: String;
  shipping?: String;
  tax?: String;
  discount?: String;
};

export type Amount = {
  total: String;
  currency: Currency;
  details?: AmountDetails;
};
export type ReturnUrls = {
  return_url: String;
  cancel_url?: String;
  callback_url?: String;
};
export type LineItem = {
  name: String;
  price: String;
  currency: Currency;
  quantity: Number;
  sku?: String;
};
export type Order = {
  reference: String;
  amount: Amount;
  return_urls: ReturnUrls;
  line_items: Array<LineItem>;
};

/**
 * Customer types
 */
export type Country =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';
export type Customer = {
  email: String;
  country: Country;
  first_name?: String;
  last_name?: String;
  address1?: String;
  address2?: String;
  city?: String;
  state?: String;
  postcode?: String;
};

/**
 * OrderView types
 */
export type MoneyAmount = {
  currency: Currency;
  value: String;
};

export type PricingDetails = {
  subtotal?: MoneyAmount;
  shipping?: MoneyAmount;
  tax?: MoneyAmount;
  discount?: MoneyAmount;
};

export type OrderStatus =
  | 'paid'
  | 'refund_completed'
  | 'refund_proposed'
  | 'refund_processing'
  | 'canceled'
  | 'expired';

export type OrderView = {
  created_at: String;
  customer: Customer;
  items: Array<LineItem>;
  merchant_uuid: String;
  pricing_details?: PricingDetails;
  reference: String;
  settlement_amount: MoneyAmount;
  status: OrderStatus;
  total_amount: MoneyAmount;
  id: String;
};

/**
 * Webhook types
 */

export type EventResource = {
  amount: String;
  currency: Currency;
  reference: String;
};

export type EventType = 'ORDER.PAYMENT.DETECTED' | 'ORDER.PAYMENT.RECEIVED' | 'ORDER.PAYMENT.CANCELLED';
export type EventState = 'completed' | 'cancelled' | 'detected';
export type Event = {
  event_type: EventType;
  resource: EventResource;
  state: EventState;
  signature: String;
};
