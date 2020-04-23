# Elastic Stack Playground
This projects provides a simple setup to run the Elastic Stack locally on docker.
The setup will create a three node cluster and Kibana.

## Prerequisites
Make sure Docker Engine is allotted at least 4GiB of memory. In Docker Desktop, you configure resource usage
on the Advanced tab in Preference (macOS) or Settings (Windows).

## Setup
1. Run `docker-compose up` on the project root.
2. Check if the nodes are up and running with `curl -X GET "localhost:9200/_cat/nodes?v&pretty"`.
3. Open Kibana to load sample data and interact with the cluster: http://localhost:5601

## Tear down
Once you are done. You can tear down the containers and volumes by running `docker-compose down -v`.

## Scripts
- `set-up.sh`: Run the setup for the Elastic Stack
- `elasticsearch-status.sh`: Basic status output of the Elasticsearch nodes
- `tear-down.sh`: Tear down the whole Elastic Stack

## Further informations
- [Getting started with the Elastic Stack](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-elastic-stack.html)
- [Running the Elastic Stack on Docker](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-docker.html)
