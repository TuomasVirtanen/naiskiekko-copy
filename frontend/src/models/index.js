// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Posts, Players } = initSchema(schema);

export {
  Posts,
  Players
};