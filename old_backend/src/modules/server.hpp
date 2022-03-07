//#include "../controller/nonapi/index.hpp"
//#include "../controller/api/v1/index.hpp"
#include "../controller/api/v1/404.hpp"
//#include "../controller/nonapi/404.hpp"

namespace run_server{
    void execute() {
  dotenv::env.load_dotenv();
  /* Register Components in scope of run() method */
  AppComponent components;

  /* Get router component */
  OATPP_COMPONENT(std::shared_ptr<oatpp::web::server::HttpRouter>, router);

  /* Create Controller and add all of its endpoints to router */
  //router->addController(std::make_shared<API>());
  router->addController(std::make_shared<API404>());
  //router->addController(std::make_shared<NonAPI>());
  //router->addController(std::make_shared<NonAPI404>());

  /* Get connection handler component */
  OATPP_COMPONENT(std::shared_ptr<oatpp::network::ConnectionHandler>,
                  connectionHandler);

  /* Get connection provider component */
  OATPP_COMPONENT(std::shared_ptr<oatpp::network::ServerConnectionProvider>,
                  connectionProvider);

  /* Create server which takes provided TCP connections and passes them to HTTP
   * connection handler */
  oatpp::network::Server server(connectionProvider, connectionHandler);

  /* Print info about server port */
  loggy::info("SERVER", ("Server running on port " + dotenv::env["PORT"]));

  /* Run server on specified port from env */
  lockdownSerice::server(false);
  server.run();
}
}