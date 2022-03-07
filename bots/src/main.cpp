#include <dotenv.h>
#include <dpp/dpp.h>
#include <dpp/fmt/format.h>
#include <iostream>
#include <nlohmann/json.hpp>
#include <stdio.h>
#include <string>
#include <thread>
#include <zmq.hpp>

// include all the commands from commands/rdl folder
#include "commands/rdl/ping.hpp"
// include all the commands from commands/rovel folder

void private_bot() {
  dotenv::env.load_dotenv();
  dpp::cluster privatebot(dotenv::env["PRIVATE_CLIENT_TOKEN"]);
  std::string prefix = dotenv::env["PRIVATE_CLIENT_PREFIX"];
  dpp::snowflake guild_id = std::stol(dotenv::env["GUILD_ID"]);

  /* Create command handler, and specify prefixes */
  dpp::commandhandler command_handler(&privatebot);
  /* Specifying a prefix of "/" tells the command handler it should also expect
   * slash commands */
  command_handler.add_prefix(prefix).add_prefix("/");

  // initialize zmq with context single io thread
  zmq::context_t context{1};
  // construct request and connect
  zmq::socket_t socket{context, zmq::socket_type::req};
  socket.connect("tcp://127.0.0.1:5555");

  privatebot.on_ready([&](const auto &event) {
    // make a json object with properties event: "PRIVATE_BOT_READY", and a data
    // object which has bot_username and bot_discriminator
    nlohmann::json data = {{"data",
                            {{"bot_username", privatebot.me.username},
                             {"bot_discriminator", privatebot.me.discriminator},
                             {"bot_id", std::to_string(privatebot.me.id)}}},
                           {"event", "PRIVATE_BOT_READY"}};
    // print to console data as string
    std::cout << data.dump() << std::endl;
    // send the json object to the server via socket
    socket.send(zmq::buffer(data.dump()), zmq::send_flags::none);

    ping_cmd::execute(command_handler, guild_id);

    /* NOTE: We must call this to ensure slash commands are registered.
     * This does a bulk register, which will replace other commands
     * that are registered already!
     */
    command_handler.register_commands();
  });

  privatebot.start(false);
}

// make a function called public_bot which will be called in main
void public_bot() {
  dotenv::env.load_dotenv();
  dpp::cluster publicbot(dotenv::env["PUBLIC_CLIENT_TOKEN"]);
  std::string prefix = dotenv::env["PUBLIC_CLIENT_PREFIX"];
  dpp::snowflake guild_id = std::stol(dotenv::env["GUILD_ID"]);

  /* Create command handler, and specify prefixes */
  dpp::commandhandler command_handler(&publicbot);
  /* Specifying a prefix of "/" tells the command handler it should also expect
   * slash commands */
  command_handler.add_prefix(prefix).add_prefix("/");
  // initialize zmq with context single io thread
  zmq::context_t context{1};
  // construct request and connect
  zmq::socket_t socket{context, zmq::socket_type::req};
  socket.connect("tcp://127.0.0.1:5555");

  publicbot.on_ready([&](const auto &event) {
    // make a json object with properties event: "PUBLIC_BOT_READY", and a data
    // object which has bot_username and bot_discriminator
    nlohmann::json data = {{"data",
                            {{"bot_username", publicbot.me.username},
                             {"bot_discriminator", publicbot.me.discriminator},
                             {"bot_id", std::to_string(publicbot.me.id)}}},
                           {"event", "PUBLIC_BOT_READY"}};
    // print to console data as string
    std::cout << data.dump() << std::endl;
    // send the json object to the server via socket
    socket.send(zmq::buffer(data.dump()), zmq::send_flags::none);

    command_handler.add_command(
        /* Command name */
        "ping",

        /* Parameters */
        {{"testparameter",
          dpp::param_info(dpp::pt_string, true, "Optional test parameter")}},

        /* Command handler */
        [&command_handler](const std::string &command,
                           const dpp::parameter_list_t &parameters,
                           dpp::command_source src) {
          std::string got_param;
          if (!parameters.empty()) {
            got_param = std::get<std::string>(parameters[0].second);
          }
          command_handler.reply(dpp::message("Pong! -> " + got_param), src);
        },

        /* Command description */
        "A test ping command",

        /* Guild id (omit for a global command) */
        guild_id);

    /* NOTE: We must call this to ensure slash commands are registered.
     * This does a bulk register, which will replace other commands
     * that are registered already!
     */
    command_handler.register_commands();
  });

  publicbot.start(false);
}

int main() {
  // make a thread for private bot
  std::thread private_bot_thread(private_bot);
  // make a thread for public bot
  std::thread public_bot_thread(public_bot);
  // close thread
  private_bot_thread.join();
  public_bot_thread.join();
  return 0;
}