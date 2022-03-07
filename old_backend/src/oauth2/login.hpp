#include <nlohmann/json.hpp>

// make a string named base_url which will be the base url of the discord api
// (https://discordapp.com/api)
const std::string base_url = "https://discord.com/api/v10";
const std::string oauth2_base_url = "https://discord.com/api/oauth2/authorize";
const std::string oauth2_token_url = "https://discord.com/api/oauth2/token";
const std::string oauth2_token_revoke_url =
    "https://discord.com/api/oauth2/token/revoke";

// make a json array of scopes
const nlohmann::json scopes = {
    "email",
    "identify",
    "bot",
    "guilds_join",
    "guilds",
    "connections",
    "applications_commands",
};

// include dotenv library
#include "dotenv.h"
#include <iostream>
namespace oauth2 {
// BotID is the id of the private bot, which is used for oauth2
uint64_t BotID;
// updateBotID is a function which fills the id to BotID
void updateBotID(uint64_t _BotID) {
  BotID = _BotID;
  loggy::success("RDLBOT", "Discord OAuth2 Connected!");
}
} // namespace oauth2
