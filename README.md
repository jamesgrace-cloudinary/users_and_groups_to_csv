# users_and_groups_to_csv

Tool written in JavaScript that generates a CSV file containing a listing of all User accounts sorted by corresponding Group membership. Useful in scenarios where a sub-account may contain large numbers of Users and/or Groups.

**Requirements:**
- Node.js - (https://nodejs.org)
- Provisioning API enabled - (https://cloudinary.com/documentation/provisioning_api)

## Configuration:

- `users_and_groups_to_csv.js`
  - `account_id: 'example-cloudname'`
    - **Cloud name** - replace the `example-cloudname` value from the account's Cloudinary Dashboard > Account Details.
  - `api_key: '0123456789'`
    - **API Key** - replace the `0123456789` value from the account's Cloudinary Dashboard > Account Details.
  - `api_secret: 'abcdefgh_ijklmnop'`
    - **API Secret** - replace the `abcdefgh_ijklmnop` value from the account's Cloudinary Dashboard > Account Details.

:warning: *Note that **this script will delete all of the derivatives for a specified Named Transformation!** Please be certain that you have a clear understanding of this script's functionality prior to executing against a production Cloudinary sub-account.*
