const {Client} = require('@elastic/elasticsearch');
const config = require('./config');


const elasticsearchClient = new Client({node: config.elasticsearch_host});

const createIndex = entity => elasticsearchClient.indices.create(entity);
const deleteIndex = indexName => elasticsearchClient.indices.delete({index: indexName});

module.exports = {createIndex, deleteIndex};
