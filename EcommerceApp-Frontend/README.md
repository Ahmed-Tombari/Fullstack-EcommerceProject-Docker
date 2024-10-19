# AngularEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.x.

## Development server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration production` flag for a production build.

## Security and Authentication

This project uses **OpenSSL** and **Okta** for secure authentication.

- **OpenSSL**: Used for generating SSL certificates and handling encryption.
  - To generate a certificate, run:
    ```bash
    openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
    ```
  - Configure the certificate in your application for HTTPS and secure communication.

- **Okta**: Integrated for authentication and authorization.
  - Ensure you have created an application in the [Okta Developer Console](https://developer.okta.com/).
  - Update your environment configuration with the Okta `clientId` and `issuer` values:
    ```typescript
    export const environment = {
      production: false,
      okta: {
        clientId: 'YOUR_OKTA_CLIENT_ID',
        issuer: 'https://YOUR_OKTA_DOMAIN/oauth2/default'
      }
    };
    ```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/). Note: Protractor is deprecated in Angular 16.

## Further help

To get more help on the Angular CLI use `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

