import axios from 'axios';

import { Order, Customer } from './types';

export const SANDBOX_URL = 'https://merchants.api.sandbox.crypto.xmoney.com/api/';
export const PRODUCTION_URL = 'https://merchants.api.crypto.xmoney.com/api/';

type Environment = 'sandbox' | 'production';

const ApiClient = (apiKey: string, environment: Environment = 'production') => {
  const apiRoot = environment === 'production' ? PRODUCTION_URL : SANDBOX_URL;
  const axiosInstance = axios.create({
    baseURL: apiRoot,
    headers: {
      common: {
        'Content-Type': 'application/vnd.api+json',
        authorization: `Bearer ${apiKey}`,
      },
    },
  });

  const createOrder = (order: Order, customer: Customer) =>
    axiosInstance
      .post('/stores/orders/', {
        data: {
          type: 'orders',
          attributes: {
            order,
            customer,
          },
        },
      })
      .then(
        ({
          status,
          data: {
            data: {
              id: uuid,
              attributes: { redirect_url },
            },
          },
        }) => {
          return {
            status,
            data: {
              redirectUrl: redirect_url,
              uuid,
            },
            errors: [],
          };
        },
      )
      .catch((error) => ({
        status: error?.response?.status,
        data: null,
        errors: error?.response?.data?.errors,
      }));

  const getOrder = (uuid: string) =>
    axiosInstance
      .get(`/stores/orders/${uuid}`)
      .then(
        ({
          status,
          data: {
            data: { attributes: data },
          },
        }) => {
          return { status, data, errors: [] };
        },
      )
      .catch((error) => ({
        status: error?.response?.status,
        data: null,
        errors: error?.response?.data?.errors,
      }));

  return { createOrder, getOrder };
};

export default ApiClient;
