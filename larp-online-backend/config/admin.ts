export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b406971bc5b0d2741b6352ded21f48e'),
  },
});
