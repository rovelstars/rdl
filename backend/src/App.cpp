#include "./controller/MyController.hpp"
#include "./AppComponent.hpp"
#include "oatpp/network/Server.hpp"
#include <iostream>
#include <string>
#include <zmq.hpp>

void run() {

  /* Register Components in scope of run() method */
  AppComponent components;

  /* Get router component */
  OATPP_COMPONENT(std::shared_ptr<oatpp::web::server::HttpRouter>, router);

  /* Create MyController and add all of its endpoints to router */
  router->addController(std::make_shared<MyController>());

  /* Get connection handler component */
  OATPP_COMPONENT(std::shared_ptr<oatpp::network::ConnectionHandler>, connectionHandler);

  /* Get connection provider component */
  OATPP_COMPONENT(std::shared_ptr<oatpp::network::ServerConnectionProvider>, connectionProvider);

  /* Create server which takes provided TCP connections and passes them to HTTP connection handler */
  oatpp::network::Server server(connectionProvider, connectionHandler);

  /* Print info about server port */
  OATPP_LOGI("MyApp", "Server running on port %s", connectionProvider->getProperty("port").getData());

  /* Run server */
  server.run();

}

//make a function named run_zmq which will run the zmq server
int run_zmq(){
  //log hello world
  OATPP_LOGI("MyApp", "Hello World!");

  using namespace std::chrono_literals;

    // initialize the zmq context with a single IO thread
    zmq::context_t context{1};

    // construct a REP (reply) socket and bind to interface
    zmq::socket_t socket{context, zmq::socket_type::rep};
    socket.bind("tcp://127.0.0.1:5555");

    // prepare some static data for responses
    const std::string data{"World"};

    for (;;) 
    {
        zmq::message_t request;

        // receive a request from client
        socket.recv(request, zmq::recv_flags::none);
        //log request and log it in console by converting it to string
        OATPP_LOGI("MyApp", "Received request: %s", request.to_string());

        // simulate work
        std::this_thread::sleep_for(1s);

        // send the reply to the client
        socket.send(zmq::buffer(data), zmq::send_flags::none);
    }

    

    return 0;
}

/**
 *  main
 */
int main(int argc, const char * argv[]) {
  oatpp::base::Environment::init();

  run_zmq();
  run();
  
  /* Print how much objects were created during app running, and what have left-probably leaked */
  /* Disable object counting for release builds using '-D OATPP_DISABLE_ENV_OBJECT_COUNTERS' flag for better performance */
  std::cout << "\nEnvironment:\n";
  std::cout << "objectsCount = " << oatpp::base::Environment::getObjectsCount() << "\n";
  std::cout << "objectsCreated = " << oatpp::base::Environment::getObjectsCreated() << "\n\n";
  
  oatpp::base::Environment::destroy();
  
  return 0;
}
