Relay Notes

# React components are wrapped with GraphQL fragments to become Relay containers
# Fragment naming convention - React Component + props joined by underscore i.e
`ListPage_viewer`
# optimisticUpdater will be triggered right after the mutation is sent (b4 server responded) - allows you to implement the success scenario of the mutation. updater will have to wait for the response to come back from server.
# proxyStore - the 1st argument of `updater` and `optimisticUpdater` provides you the way to directly manipulate the cache.

Web Notes

* Ensure image has a 1920px width for full-width screen slideshow
