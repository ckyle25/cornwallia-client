// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverUrl: 'https://cornwallia.azurewebsites.net',
  clientID: 'JL58LF6ccu98nTToPa5vUsm0aVObRjef',
  domain: 'ckylegaming.auth0.com',
  callbackURL: 'http://localhost:8100/callback'
};
