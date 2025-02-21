import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_categories';
  info: {
    description: '';
    displayName: 'category';
  };
  attributes: {};
}

export interface SharedEmailAdresse extends Struct.ComponentSchema {
  collectionName: 'components_shared_email_adresses';
  info: {
    displayName: 'email_adresse';
  };
  attributes: {
    emails: Schema.Attribute.Email;
  };
}

export interface SharedEmailCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_email_categories';
  info: {
    displayName: 'email_category';
  };
  attributes: {
    emails: Schema.Attribute.Email;
  };
}

export interface SharedEmails extends Struct.ComponentSchema {
  collectionName: 'components_shared_emails';
  info: {
    description: '';
    displayName: 'emails';
  };
  attributes: {
    Emails: Schema.Attribute.Component<'shared.email-adresse', false>;
  };
}

export interface SharedFacebook extends Struct.ComponentSchema {
  collectionName: 'components_shared_facebooks';
  info: {
    description: '';
    displayName: 'facebook';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedFollow extends Struct.ComponentSchema {
  collectionName: 'components_shared_follows';
  info: {
    displayName: 'follow';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
  };
}

export interface SharedFollowUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_follow_uses';
  info: {
    description: '';
    displayName: 'follow-us';
  };
  attributes: {
    facebook: Schema.Attribute.Component<'shared.facebook', false>;
  };
}

export interface SharedInstagram extends Struct.ComponentSchema {
  collectionName: 'components_shared_instagrams';
  info: {
    description: '';
    displayName: 'instagram';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedIntroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_intro_banners';
  info: {
    displayName: 'intro_banner';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRequestForInformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_request_for_informations';
  info: {
    description: '';
    displayName: 'Request_for_information';
  };
  attributes: {
    emails: Schema.Attribute.Email;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSchedule extends Struct.ComponentSchema {
  collectionName: 'components_shared_schedules';
  info: {
    displayName: 'schedule';
  };
  attributes: {
    days: Schema.Attribute.String;
    saturday: Schema.Attribute.String;
    sunday: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSuivezNous extends Struct.ComponentSchema {
  collectionName: 'components_shared_suivez_nous';
  info: {
    description: '';
    displayName: 'suivez-nous';
  };
  attributes: {
    facebook: Schema.Attribute.Component<'shared.instagram', false>;
    instagram: Schema.Attribute.Component<'shared.facebook', false>;
  };
}

export interface SharedVidangeMoteur extends Struct.ComponentSchema {
  collectionName: 'components_shared_vidange_moteurs';
  info: {
    description: '';
    displayName: 'vidange-moteur';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image_home_page: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_service_page: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    rank: Schema.Attribute.Integer;
    shortDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.category': SharedCategory;
      'shared.email-adresse': SharedEmailAdresse;
      'shared.email-category': SharedEmailCategory;
      'shared.emails': SharedEmails;
      'shared.facebook': SharedFacebook;
      'shared.follow': SharedFollow;
      'shared.follow-us': SharedFollowUs;
      'shared.instagram': SharedInstagram;
      'shared.intro-banner': SharedIntroBanner;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.request-for-information': SharedRequestForInformation;
      'shared.rich-text': SharedRichText;
      'shared.schedule': SharedSchedule;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.suivez-nous': SharedSuivezNous;
      'shared.vidange-moteur': SharedVidangeMoteur;
    }
  }
}
