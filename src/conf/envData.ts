const EnvVars = {
  local: {
    serverUrl: 'https://dev-estimate.einsanet.es/api/',
    gtApiUrl: 'https://gtapi.einsanet.es',
    gtApiKey: '4EB72EDB-0949-420E-8F16-5FA09862A4C9',
    debug: false
  },
  development: {
    serverUrl: 'https://dev-estimate.einsanet.es/api/',
    gtApiUrl: 'https://gtapi.einsanet.es',
    gtApiKey: '4EB72EDB-0949-420E-8F16-5FA09862A4C9',
    debug: false
  },
  test: {
    serverUrl: 'https://qa-estimate.einsanet.es/api/',
    gtApiUrl: 'https://gtapites.einsanet.es',
    gtApiKey: 'D083708D-9CCB-4515-96A2-A2DE7D3763CC',
    debug: false
  },
  preproduction: {
    serverUrl: 'https://uat-estimate.einsanet.es/api/',
    gtApiUrl: 'https://gtapi-preprod.gtestimate.com',
    gtApiKey: '4EB72EDB-0949-420E-8F16-5FA09862A4C9',
    debug: false
  },
  production: {
    serverUrl: 'https://estimate.gtmotive.com/api/',
    gtApiUrl: 'https://gtapi.gtestimate.com',
    gtApiKey: '4EB72EDB-0949-420E-8F16-5FA09862A4C9',
    debug: false
  }
};

export const EnvData = EnvVars[process.env.NODE_ENV];
