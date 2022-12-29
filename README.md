# users_and_groups_to_csv

Tool written in JavaScript that generates a CSV file containing a listing of all User accounts sorted by corresponding Group membership. Useful in scenarios where a sub-account may contain large numbers of Users and/or Groups.

**Requirements:**
- Node.js - (https://nodejs.org)
- Cloudinary account with Provisioning API enabled - (https://cloudinary.com/documentation/provisioning_api)

## Configuration:

- `users_and_groups_to_csv.js`
  - `account_id: '0123456789-0123456789'`
    - **Account ID** - replace the `0123456789-0123456789` value from Account Settings > Account > Provisioning API Access.
  - `provisioning_api_key: 'abcdefghijklmnopqrs'`
    - **API Key** - replace the `abcdefghijklmnopqrs` value from Account Settings > Account > Provisioning API Access.
  - `provisioning_api_secret: 'abcdefghijklmnop'`
    - **API Secret** - replace the `abcdefghijklmnop` value from Account Settings > Account > Provisioning API Access.

:warning: *Note that **this script requires access to Cloudinary's Provisioning API!** Please be certain that the requisite Provisioning API flags have been enabled and that the Provisioning API Keys have been generated prior to prior to executing against a production Cloudinary sub-account.*
