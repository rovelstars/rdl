#include <zmq.hpp>
#include <string>
#include <iostream>

namespace run_zmq{
    void execute() {
  // log hello world
  loggy::info("QUEUE", "Starting zmq server");

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
    // make a json response {status: "success"}
    nlohmann::json response = {{"status", "success"}};
    // setup the response
    if (event == "PRIVATE_BOT_READY") {
      // get bot username and discriminator
      std::string bot_username = request_json["data"]["bot_username"];
      int bot_discriminator = request_json["data"]["bot_discriminator"];
      // log the bot_username, and bot_discriminator
      loggy::info("RDLBOT", ("Logged in as " + bot_username + "#" +
                             std::to_string(bot_discriminator)));
      lockdownSerice::bots(false);
      // make a json response {status: "success"}
      nlohmann::json response = {{"status", "success"}};
      // reply to client
      socket.send(zmq::buffer(response.dump()), zmq::send_flags::none);
    }
    if (event == "PUBLIC_BOT_READY") {
      // get bot username and discriminator
      std::string bot_username = request_json["data"]["bot_username"];
      int bot_discriminator = request_json["data"]["bot_discriminator"];
      // log the bot_username, and bot_discriminator
      loggy::info("ROVELBOT", ("Logged in as " + bot_username + "#" +
                               std::to_string(bot_discriminator)));
      lockdownSerice::bots(false);
      // make a json response {status: "success"}
      nlohmann::json response = {{"status", "success"}};
      // reply to client
      socket.send(zmq::buffer(response.dump()), zmq::send_flags::none);
    }
  }
}
}