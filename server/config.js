const config = {
  port: process.env.OPENSHIFT_NODEJS_PORT ||8000,
  domain: process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1'
};

export default config;
