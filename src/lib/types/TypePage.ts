import * as Contentful from 'contentful';
import { TypeSeoFields } from './TypeSeo';
import { TypePage_help_center_articleFields } from './TypePage_help_center_article';
import { TypePage_landingFields } from './TypePage_landing';
import { TypePage_tutorialFields } from './TypePage_tutorial';

export interface TypePageFields {
  title: Contentful.EntryFields.Symbol;
  name: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  content: Contentful.Entry<
    TypePage_landingFields | TypePage_help_center_articleFields | TypePage_tutorialFields
  >;
  seo?: Contentful.Entry<TypeSeoFields>;
}

export type TypePage = Contentful.Entry<TypePageFields>;
