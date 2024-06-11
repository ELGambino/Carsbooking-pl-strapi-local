import type { Schema, Attribute } from '@strapi/strapi';

export interface CarsFeature extends Schema.Component {
  collectionName: 'components_cars_features';
  info: {
    displayName: 'Feature';
    icon: 'magic';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface RentalsAdditionalServices extends Schema.Component {
  collectionName: 'components_rentals_additional_services';
  info: {
    displayName: 'AdditionalServices';
    icon: 'plus';
  };
  attributes: {
    Name: Attribute.String;
    Price: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cars.feature': CarsFeature;
      'rentals.additional-services': RentalsAdditionalServices;
    }
  }
}
