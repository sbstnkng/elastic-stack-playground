import * as elasticsearchClient from '../elasticsearchClient';
import { handleError } from '../utils/errorHandler';

const deleteSampleIndex = () => elasticsearchClient.deleteIndex('sampleindex');

deleteSampleIndex().catch(handleError);
