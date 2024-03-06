# okta-vue-test

A simple web app to test OKTA with Vue 3.

## Project setup

### Install

1. Install:
    ```
    npm install
    ```
2. Create config file:
    ```shell
    touch src/config.js
    ```
3. Populate `config.js`:
    ```js
   // replace ${} with the relevant data
    export default {
      oidc: {
        clientId: "${client_id}",
        issuer: "https://${okta_domain}.okta.com/oauth2/default",
        redirectUri: window.location.origin + "/login/callback",
        scopes: ["openid", "profile", "email"],
      },
    };
    ```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
