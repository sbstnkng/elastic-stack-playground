import * as elasticsearch from '@elastic/elasticsearch';
import config from './config';

const elasticsearchClient = elasticsearch.Client({
    hosts: [config.elasticsearch_host],
    log: [{
        type: 'stdio',
        levels: ['error']
    }]
});

const createIndex = entity => elasticsearchClient.indices.create(entity);
const deleteIndex = indexName => elasticsearchClient.indices.delete({index: indexName});

export {createIndex, deleteIndex}
