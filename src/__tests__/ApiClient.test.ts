import mockAxios from 'jest-mock-axios';

import { ApiClient } from '../index';
import { Customer, Order } from '../types';

afterEach(() => {
  mockAxios.reset();
});

const createOrderResponse = {
  status: 201,
  data: {
    data: {
      id: '581d498a-9d19-4cd1-8a8d-7285c9a63613',
      attributes: {
        redirect_url: 'http://pay.sandbox-utrust.com?uuid=3c7131df-c370-4687-8f61-2a33957ac300',
      },
    },
  },
};

describe('createOrder', () => {
  test('Creates an order successfully and returns redirect url', async () => {
    const { createOrder } = ApiClient('u_test_api_8ebfc651-bdb9-4e90-b24d-d3834b8af2e5', 'sandbox');
    const order: Order = {
      reference: 'order-51367',
      amount: {
        total: '10.00',
        currency: 'EUR',
      },
      return_urls: {
        return_url: 'http://example.com/success',
      },
      line_items: [
        {
          sku: 'item-unique-id',
          name: 'Donation',
          price: '10.00',
          currency: 'EUR',
          quantity: 1,
        },
      ],
    };
    const customer: Customer = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'email@email.com',
      address1: '118 Main St',
      address2: '7th Floor',
      city: 'New York',
      state: 'New York',
      postcode: '10001',
      country: 'US',
    };

    const createOrderPromise = createOrder(order, customer);
    expect(mockAxios.post).toHaveBeenCalledWith(`/stores/orders/`, {
      data: { type: 'orders', attributes: { order, customer } },
    });

    mockAxios.mockResponse(createOrderResponse);

    const result = await createOrderPromise;

    expect(result?.status).toEqual(201);
    expect(result?.data?.redirectUrl).toEqual(createOrderResponse.data.data.attributes.redirect_url);
    expect(result?.data?.uuid).toEqual(createOrderResponse.data.data.id);
  });
});

const orderData = {
  data: {
    data: {
      attributes: {
        created_at: '2021-01-14T17:55:09Z',
        customer: {
          address1: '118 Main St',
          address2: '7th Floor',
          city: 'New York',
          country: 'US',
          email: 'email@email.com',
          first_name: 'John',
          last_name: 'Doe',
          postcode: '10001',
          state: 'New York',
        },
        dispute_id: null,
        items: [
          {
            currency: 'EUR',
            name: 'T-shirt',
            price: '0.50',
            quantity: 1,
            sku: 'AFG1245',
          },
          {
            currency: 'EUR',
            name: 'T-shirt old scool',
            price: '0.25',
            quantity: 1,
            sku: 'AFG12457',
          },
        ],
        merchant_uuid: 'ce973a80-fb98-4031-ae8b-33e59a236dff',
        pricing_details: {
          discount: {
            currency: 'EUR',
            value: '0.01',
          },
          shipping: {
            currency: 'EUR',
            value: '0.10',
          },
          subtotal: {
            currency: 'EUR',
            value: '0.75',
          },
          tax: {
            currency: 'EUR',
            value: '0.15',
          },
        },
        reference: 'TESTbyutrust',
        settlement_amount: {
          currency: 'USD',
          value: '1.20',
        },
        status: 'cancelled',
        total_amount: {
          currency: 'EUR',
          value: '0.99',
        },
      },
      id: '581d498a-9d19-4cd1-8a8d-7285c9a63613',
      type: 'orders',
    },
  },
};

describe('getOrder', () => {
  it('Retrieves information about an order', async () => {
    const orderUuid = '581d498a-9d19-4cd1-8a8d-7285c9a63613';
    const { getOrder } = ApiClient('u_test_api_8ebfc651-bdb9-4e90-b24d-d3834b8af2e5', 'sandbox');
    const orderResponsePromise = getOrder(orderUuid);

    expect(mockAxios.get).toHaveBeenCalledWith(`/stores/orders/${orderUuid}`);

    mockAxios.mockResponse(orderData);
    const result = await orderResponsePromise;

    expect(result.status).toEqual(200);
    expect(result.data.status).toEqual(orderData.data.data.attributes.status);
  });
});
