#include "./AppComponent.hpp"
#include "./controller/Controller.hpp"
#include "./controller/api/v1/index.hpp"
#include "./utils/loggy.hpp"
#include "oatpp/network/Server.hpp"
#include <dotenv.h>
#include <iostream>
#include <nlohmann/json.hpp>
#include <string>
#include <thread>
#include "./utils/lockdown.hpp"
#include "./modules/zmq.hpp"
#include "./modules/server.hpp"
#include "./modules/signalHandler.hpp"
#include <csignal>

// main
int main(int argc, const char *argv[]) {
  loggy::info("main", "Starting RDL");
  lockdownSerice::start();
  // start the zmq server as a thread
  std::thread zmq_server(run_zmq::execute);
  run_server::execute();
  // join the zmq server thread
  zmq_server.join();

  //register signal handler
  signal(SIGINT, signalHandler::execute);

  return 0;
}