import * as elasticsearchClient from '../elasticsearchClient';
import { handleError } from '../utils/errorHandler';
import { INDEX_NAME } from './constants';

const createPersonIndex = () => elasticsearchClient.createIndex(getPersonIndexDefinition());

const getPersonIndexDefinition = () => ({
  index: INDEX_NAME,
  body: {
    mappings: {
      properties: {
        cell: { type: 'text' },
        birthdate: { type: 'date' },
        email: { type: 'text' },
        gender: { type: 'text' },
        id: {
          properties: {
            name: { type: 'text' },
            value: { type: 'text' },
          },
        },
        location: {
          properties: {
            city: { type: 'text' },
            coordinates: { type: 'geo_point' },
            country: { type: 'text' },
            postcode: { type: 'long' },
            state: { type: 'text' },
            streetName: { type: 'text' },
            streetNumber: { type: 'text' },
            timezone: {
              properties: {
                description: { type: 'text' },
                offset: { type: 'text' },
              },
            },
          },
        },
        login: {
          properties: {
            md5: { type: 'text' },
            password: { type: 'text' },
            salt: { type: 'text' },
            sha1: { type: 'text' },
            sha256: { type: 'text' },
            username: { type: 'text' },
            uuid: { type: 'text' },
          },
        },
        name: {
          properties: {
            first: { type: 'text' },
            last: { type: 'text' },
            title: { type: 'text' },
          },
        },
        nat: { type: 'text' },
        phone: { type: 'text' },
        picture: {
          properties: {
            large: { type: 'text' },
            medium: { type: 'text' },
            thumbnail: { type: 'text' },
          },
        },
        registered: {
          properties: {
            age: {
              type: 'long',
            },
            date: {
              type: 'date',
            },
          },
        },
      },
    },
  },
});

createPersonIndex().catch(handleError);
