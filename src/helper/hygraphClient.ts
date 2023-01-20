import { GraphQLClient } from "graphql-request"
import pThrottle from "p-throttle"

const hygraphClient = new GraphQLClient(import.meta.env.HYGRAPH_API || "", {
    headers: {
        Authorization: `Bearer ${import.meta.env.HYGRAPH_API_TOKEN}`
    }
});


// Set the limit of # of calls per interval in ms (5 per second)
const throttle = pThrottle({limit: 1, interval: 1000})
export const throttledFetch = throttle(async (...args: any[]) => {
    const [query, vars] = args

    return await hygraphClient.request(query, vars)
})

export default hygraphClient;