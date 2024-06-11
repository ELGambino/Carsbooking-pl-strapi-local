'use strict';

/**
 * pick-up-point service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pick-up-point.pick-up-point');
