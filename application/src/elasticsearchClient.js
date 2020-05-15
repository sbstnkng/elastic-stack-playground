import { Client } from '@elastic/elasticsearch';
import config from './config';

const elasticsearchClient = new Client({ node: config.elasticsearch_host });

const createIndex = (entity) => elasticsearchClient.indices.create(entity);
const updateIndex = (entity) => elasticsearchClient.indices.putMapping(entity);
const deleteIndex = (indexName) => elasticsearchClient.indices.delete({ index: indexName });
const bulk = (index, body) => elasticsearchClient.bulk({ refresh: true, index, body });

export { createIndex, deleteIndex, updateIndex, bulk };
