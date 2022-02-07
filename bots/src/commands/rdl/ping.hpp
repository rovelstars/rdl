#include <dpp/dpp.h>
#include <dpp/nlohmann/json.hpp>
#include <dpp/fmt/format.h>
#include <iostream>
#include <string>

namespace ping_cmd {
// make a function named execute which takes in dpp::command_handler, guild_id
void execute(dpp::commandhandler &command_handler, dpp::snowflake guild_id) {
                 //add a command named ping
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
        guild_id
    );
             }
} // namespace ping_cmd