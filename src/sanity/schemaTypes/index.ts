import { type SchemaTypeDefinition } from 'sanity';
import { Chef } from './chef';
import { food } from './food';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, Chef],
};