import type { Schema, Struct } from '@strapi/strapi';

export interface DateStartDate extends Struct.ComponentSchema {
  collectionName: 'components_date_start_dates';
  info: {
    description: '';
    displayName: 'event_detail';
  };
  attributes: {
    place: Schema.Attribute.String & Schema.Attribute.Required;
    start_date: Schema.Attribute.DateTime & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'date.start-date': DateStartDate;
    }
  }
}
