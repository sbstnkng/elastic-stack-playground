const elasticsearchClient = require('../elasticsearchClient');
const {handleError} = require('../utils/errorHandler');


const deleteSampleIndex = () => elasticsearchClient.deleteIndex('sampleindex');


deleteSampleIndex().catch(handleError);