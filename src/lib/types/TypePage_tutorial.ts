import * as Contentful from 'contentful';
import { TypeComponent_textFields } from './TypeComponent_text';
import { TypePageFields } from './TypePage';

export interface TypePage_tutorialFields {
  title: Contentful.EntryFields.Symbol;
  difficulty: Contentful.EntryFields.Integer;
  timeRequired?: Contentful.EntryFields.Integer;
  repoLink?: Contentful.EntryFields.Text;
  explanation: Contentful.EntryFields.RichText;
}

export type TypePage_tutorial = Contentful.Entry<TypePage_tutorialFields>;
