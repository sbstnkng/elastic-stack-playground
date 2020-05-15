import * as elasticsearchClient from '../elasticsearchClient';
import { handleError } from '../utils/errorHandler';
import { INDEX_NAME } from './constants';

const deletePersonIndex = () => elasticsearchClient.deleteIndex(INDEX_NAME);

deletePersonIndex().catch(handleError);
