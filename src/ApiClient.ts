import axios from 'axios';

import { Order, Customer } from './types';

export const SANDBOX_URL = 'https://merchants.api.sandbox-utrust.com/api/';
export const PRODUCTION_URL = 'https://merchants.api.utrust.com/api/';

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
              attributes: { redirectUrl },
            },
          },
        }) => {
          return {
            status,
            data: {
              redirectUrl,
              uuid,
            },
            errors: [],
          };
        },
      )
      .catch((error) => ({
        status: error?.reponse?.status,
        data: null,
        errors: error.response || error.request || error.message,
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
        status: error?.reponse?.status,
        data: null,
        errors: error.response || error.request || error.message,
      }));

  return { createOrder, getOrder };
};

export default ApiClient;
