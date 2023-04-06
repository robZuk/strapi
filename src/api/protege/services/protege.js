'use strict';

/**
 * protege service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::protege.protege');
