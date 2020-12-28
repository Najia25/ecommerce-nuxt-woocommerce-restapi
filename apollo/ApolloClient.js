import clientConfig from '@/client-config'
import cache from './cache'

export default (context) => {
  return {
    httpEndpoint: clientConfig.graphqlUrl,
    cache
  }
}
