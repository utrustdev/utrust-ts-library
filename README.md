# Utrust typescript library

The official Typescript library for the [Utrust API](https://docs.api.utrust.com).

## Minimum Requirements

- nodejs (minimum: 12)
- npm

## Install

```
npm install --save utrust-ts-library
```

## Usage

### API Client

#### Creating a new Order:

```
import {ApiClient} from 'utrust-ts-library';

const {createOrder} = ApiClient(<API_KEY>, <ENVIRONMENT>)
```

As environment you can either use `production` or `sandbox`. It defaults to `production` if nothing is passed.

Then you can just create a new order passing an `order` and `customer` object as specified in the docs, which will return you a promise with the following structure:

```
const {status, data, errors} = await createOrder(order, customer);
```

Where you can get:

- `status`: response status;
- `data`: which should contain `{redirectUrl, uuid}` in case of success;
- `errors`: in case something goes wrong

#### Getting Order's Data

```
import {ApiClient} from 'utrust-ts-library';

const {getOrder} = ApiClient(<API_KEY>, <ENVIRONMENT>)
```

Again, as environment you can either use `production` or `sandbox`. It defaults to `production` if nothing is passed.

```
const {status, data, errors} = await getOrder(uuid)
```

Using the order `uuid` that you could grab on order creation, you can later use it for fetching that specific order. This can be useful for checking order `status` if you don't build a webhook integration.
Other useful returned data includes:

- `created_at`
- `items`
- `pricing_details`
- `reference`
- `settlement_amount` - in merchant settlement currency
- `total_amount` - in original store currency
- `id` - order uuid
- `status`

A complete example of this payload can be found in the tests/API documentation

### Webhook Validator

The Webhook validator module can be used to verify an incoming event via Webhook.
For easy reausability you can just initiate your `WebhookValidator` with your `WEBHOOK_SECRET` (which you can retrieve on your Merchants Dashboard/Integrations), and then just call `validateSignature` with your webhook's `payload`
It simply returns:

- `true` - in case provided payload can be verified by provided `webhookSecret`;
- `false` - otherwise;

Example:

```
import {WebhookValidator} from 'utrust-ts-library';

const {validateSignature} = WebhookValidator(<WEBHOOK_SECRET>);


const isValid = await validateSignature(payload)
```

## Contribute

This library was written and is maintained by the Utrust development team.
We have now opened it to the world so that the community using this library may have the chance of shaping its development.

You can contribute by simply letting us know your suggestions or any problems that you find [by opening an issue on GitHub](https://github.com/utrustdev/utrust-ts-library/issues/new).

You can also fork the repository on GitHub and open a pull request for the `master` branch with your missing features and/or bug fixes.
Please make sure the new code follows the same style and conventions as already written code.
Our team is eager to welcome new contributors into the mix :blush:.

### Tests

When contributing with new changes, please make an effort to provide the respective tests.
This is especially important when fixing any problems, as it will prevent other contributors
from accidentally reintroducing the issue in the future.

Before submitting a pull request with your changes, please make sure every test passes:

```
npm run test
```

### Lint

Before contributing your changes, make sure it passes on the linter:

```
npm run lint
```

## License

Utrust utrust-ts-library is maintained with :purple_heart: by the Utrust development team,
and is available to the public under the GNU GPLv3 license.
Please see [LICENSE](https://github.com/utrustdev/utrust-ts-library/blob/master/LICENSE) for further details.

&copy; Utrust 2021
