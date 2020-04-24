
## About this application
This application is using [React](https://reactjs.org/) for the frontend, [Netlify Functions](https://www.netlify.com/docs/functions/) for API calls, and [FaunaDB](https://fauna.com/) as the backing database.

## Deployed to Netlify

https://reverent-lewin-cecba9.netlify.app/

## Setup & Run Locally

1. Install the dependencies

    ```bash
    npm install
    ```

2. Sign up for a FaunaDB account

    https://dashboard.fauna.com/accounts/register

3. Create a database

    In the Fauna Cloud Console:
    - Click “New Database”
    - Enter “Netlify” as the “Database Name”
    - Click “Save”

4. Create a database access key

    In the Fauna Cloud Console:
    - Click “Security” in the left navigation
    - Click “New Key”
    - Make sure that the “Database” field is set to “Netlify”
    - Make sure that the “Role” field is set to “Admin”
    - Enter “Netlify” as the “Key Name”
    - Click “Save”

5. Copy the database access key’s secret

    Save the secret somewhere safe; you won’t get a second chance to see it.

6. Set your database access secret in your terminal environment

    In your terminal, run the following command:

    ```bash 
    export FAUNADB_SERVER_SECRET=YourFaunaDBSecretHere
    ```

    Replace `YourFaunaDBSecretHere` with the value of the secret that you copied in the previous step.

7. Bootstrap your FaunaDB collection and indexes

    ```bash
    npm run bootstrap
    ```

8. Run project locally

    ```bash
    npm start
    ```