#include <dotenv.h>
#include <dpp/dpp.h>
#include <dpp/fmt/format.h>
#include <iostream>
#include <stdio.h>

int main() {
  dotenv::env.load_dotenv();
  dpp::cluster bot(dotenv::env["BOT_TOKEN"]);

  /* The interaction create event is fired when someone issues your commands */
  bot.on_interaction_create([&bot](const dpp::interaction_create_t &event) {
    event.thinking();
    if (event.command.type == dpp::it_application_command) {
      dpp::command_interaction cmd_data =
          std::get<dpp::command_interaction>(event.command.data);
      /* Check which command they ran */
      if (cmd_data.name == "burp") {
        /* Fetch a parameter value from the command parameters */
        std::string animal =
            std::get<std::string>(event.get_parameter("animal"));
        /* Reply to the command. There is an overloaded version of this
         * call that accepts a dpp::message so you can send embeds.
         */
        event.reply(dpp::ir_channel_message_with_source,
                    fmt::format("Burp! You chose {}", animal));
      }
    }
  });

  bot.on_ready([&bot](const dpp::ready_t &event) {
    std::cout << "Logged in as " << bot.me.username << "!\n";
    dpp::slashcommand newcommand;
    /* Create a new global command on ready event */
    newcommand.set_name("burp")
        .set_description("Send a random adorable animal photo")
        .set_application_id(bot.me.id)
        .add_option(dpp::command_option(dpp::co_string, "animal",
                                        "The type of animal", true)
                        .add_choice(dpp::command_option_choice(
                            "Dog", std::string("animal_dog")))
                        .add_choice(dpp::command_option_choice(
                            "Cat", std::string("animal_cat")))
                        .add_choice(dpp::command_option_choice(
                            "Penguin", std::string("animal_penguin"))));

    /* Register the command */
    bot.guild_command_create(newcommand, dpp::snowflake{931484295745376296});
  });

  bot.on_message_create([&bot](const auto &event) {
    if (event.msg.content == "!ping") {
      bot.message_create(
          dpp::message(event.msg.channel_id, "~~pong!~~ DPP pog!"));
    }
  });
  bot.start(false);

  return 0;
}
