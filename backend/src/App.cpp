#include "./AppComponent.hpp"
#include "./controller/MyController.hpp"
#include "node/node_api.h"
#include "oatpp/network/Server.hpp"
#include <dotenv.h>
#include <iostream>
#include <nlohmann/json.hpp>
#include <string>
#include <thread>
#include <zmq.hpp>

// setup dotenv

std::string serverlog;
std::string rdlbotlog;
std::string rovelbotlog;
std::string generallog;
void run() {

  /* Register Components in scope of run() method */
  AppComponent components;

  /* Get router component */
  OATPP_COMPONENT(std::shared_ptr<oatpp::web::server::HttpRouter>, router);

  /* Create MyController and add all of its endpoints to router */
  router->addController(std::make_shared<MyController>());

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
  OATPP_LOGI(serverlog, "Server running on port %s",
             connectionProvider->getProperty("port").getData());

  /* Run server */
  server.run();
}

// make a function named run_zmq which will run the zmq server
void run_zmq() {
  // log hello world
  OATPP_LOGI(generallog, "Starting zmq server");

  using namespace std::chrono_literals;

  // initialize the zmq context with a single IO thread
  zmq::context_t context{1};

  // construct a REP (reply) socket and bind to interface
  zmq::socket_t socket{context, zmq::socket_type::rep};
  // bind the socket to port 5555 at route /
  socket.bind("tcp://127.0.0.1:5555");

  for (;;) {
    zmq::message_t request;

    // receive a request from client
    socket.recv(request, zmq::recv_flags::none);
    // convert request to json with nlohmann json parser
    nlohmann::json request_json = nlohmann::json::parse(request.to_string());
    // event the event type
    std::string event = request_json["event"];
    //make a json response {status: "success"}
      nlohmann::json response = {{"status", "success"}};
      // setup the response
    if (event == "PRIVATE_BOT_READY") {
      // get bot username and discriminator
      std::string bot_username = request_json["data"]["bot_username"];
      int bot_discriminator = request_json["data"]["bot_discriminator"];
      // log the bot_username, and bot_discriminator
      OATPP_LOGI(rdlbotlog, "Logged in as %s#%d", bot_username.c_str(),
                 bot_discriminator);
                //make a json response {status: "success"}
      nlohmann::json response = {{"status", "success"}};
      // reply to client
      socket.send(zmq::buffer(response.dump()), zmq::send_flags::none);
    }
    if (event == "PUBLIC_BOT_READY") {
      // get bot username and discriminator
      std::string bot_username = request_json["data"]["bot_username"];
      int bot_discriminator = request_json["data"]["bot_discriminator"];
      // log the bot_username, and bot_discriminator
      OATPP_LOGI(rdlbotlog, "Logged in as %s#%d", bot_username.c_str(),
                 bot_discriminator);
      //make a json response {status: "success"}
      nlohmann::json response = {{"status", "success"}};
      // reply to client
      socket.send(zmq::buffer(response.dump()), zmq::send_flags::none);
    }
  }
}

//main
int main(int argc, const char *argv[]) {
  oatpp::base::Environment::init();
  dotenv::env.load_dotenv();
  std::string environment = dotenv::env["ENVIRONMENT"];
  serverlog = (environment == "production") ? "SERVER   "
                                            : "\033[1;33mSERVER\033[0m   ";
  rdlbotlog = (environment == "production") ? "RDLBOT   "
                                            : "\033[1;34mRDLBOT\033[0m   ";
  rovelbotlog = (environment == "production") ? "ROVELBOT "
                                              : "\033[1;35mROVELBOT\033[0m ";
  generallog = (environment == "production") ? "GENERAL  "
                                             : "\033[1;32mGENERAL\033[0m  ";
  // start the zmq server as a thread
  std::thread zmq_server(run_zmq);
  run();

  /* Print how much objects were created during app running, and what have
   * left-probably leaked */
  /* Disable object counting for release builds using '-D
   * OATPP_DISABLE_ENV_OBJECT_COUNTERS' flag for better performance */
  std::cout << "\nEnvironment:\n";
  std::cout << "objectsCount = " << oatpp::base::Environment::getObjectsCount()
            << "\n";
  std::cout << "objectsCreated = "
            << oatpp::base::Environment::getObjectsCreated() << "\n\n";

  oatpp::base::Environment::destroy();
  // join the zmq server thread
  zmq_server.join();
  return 0;
}
