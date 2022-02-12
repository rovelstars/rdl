// make a string named BASE_URL which will be the base url of the discord api
// (https://discordapp.com/api)
const std::string BASE_URL = "https://discord.com/api/v8";
// include dotenv library
#include "dotenv.h"
#include <iostream>
namespace oauth2 {
// BotID is the id of the private bot, which is used for oauth2
std::string BotID;
// updateBotID is a function which fills the id to BotID
void updateBotID(std::string _BotID, auto loggy){
    BotID = _BotID;
    loggy::success("RDLBOT","Discord OAuth2 Connected!");
}
} // namespace oauth2