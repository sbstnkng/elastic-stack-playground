import * as elasticsearchClient from '../elasticsearchClient';
import {handleError} from '../utils/errorHandler';


const updateSampleIndex = () => elasticsearchClient.updateIndex(getSampleIndexUpdateDefinition());

const getSampleIndexUpdateDefinition = () => (
    {
        index: "sampleindex",
        body: {
            properties: {
                city: {type: "text"}
            }
        }
    }
);


updateSampleIndex().catch(handleError);