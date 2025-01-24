import MiniSearch from 'minisearch';

import data from './data';

const indexer = new MiniSearch({
  fields: ['type', 'title', 'description'],
  storeFields: ['type', 'id', 'url', 'title', 'description', 'image'],
});

indexer.addAll(data);

export default indexer;
