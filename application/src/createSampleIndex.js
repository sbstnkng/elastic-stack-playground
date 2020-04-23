const elasticsearchClient = require('./elasticsearchClient');
const {handleError} = require('./utils/errorHandler');


const createSampleIndex = () => elasticsearchClient.createIndex(getSampleIndexDefinition());

const getSampleIndexDefinition = () => (
    {
        index: "sampleindex",
        body: {
            mappings: {
                properties: {
                    name: {type: "text"},
                    lastname: {type: "text"},
                    job_description: {type: "text"}
                }
            }
        }
    });


createSampleIndex().catch(handleError);