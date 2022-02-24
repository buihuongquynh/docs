import axios from "axios";
import path from 'path';
import { getAllDocuments , getDocument} from '../../../lib/source.ts';

export const resolvers = {
  Query: {
    getListURL: () => {
      const documents = getAllDocuments();
      const listURL = []
      documents.forEach(document => {
        listURL.push(`/doc/${document.slug.join('/')}`)
      });
      return {
        data: listURL,
      };
    },
    getDocumentInfo: (_, slug) => {
      const document = getDocument(slug);
      const content = document.content
      return {
        document: content,
      };
    },
  },
 
};
