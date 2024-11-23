import type { NextConfig } from "next";

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin(
  './src/app/_utils/i18n-config.ts'
);

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
