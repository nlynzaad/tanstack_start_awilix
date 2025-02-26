Simple application to test adding awilix dependency injection to server functions and api routes on a tanstack/start project.

In order to get the scoped container into the api route, without manually creating scope for each api route, I customized the default createStartAPIHandler to alter the request object to include context, this can be seen on app/api.ts. This can probably be done in other manners but seemed to be a fairly ellegant way to get this done.

The main page and api route both indicates the function of scoped, singleton and transient services.
