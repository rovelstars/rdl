#include <ctime>
#include <dotenv.h>
#include <iomanip>
#include <iostream>

// make a namespace called loggy
namespace loggy {
#define RESET "\033[0m"
#define BLACK "\033[30m"              /* Black */
#define RED "\033[31m"                /* Red */
#define GREEN "\033[32m"              /* Green */
#define YELLOW "\033[33m"             /* Yellow */
#define BLUE "\033[34m"               /* Blue */
#define MAGENTA "\033[35m"            /* Magenta */
#define CYAN "\033[36m"               /* Cyan */
#define WHITE "\033[37m"              /* White */
#define BOLDBLACK "\033[1m\033[30m"   /* Bold Black */
#define BOLDRED "\033[1m\033[31m"     /* Bold Red */
#define BOLDGREEN "\033[1m\033[32m"   /* Bold Green */
#define BOLDYELLOW "\033[1m\033[33m"  /* Bold Yellow */
#define BOLDBLUE "\033[1m\033[34m"    /* Bold Blue */
#define BOLDMAGENTA "\033[1m\033[35m" /* Bold Magenta */
#define BOLDCYAN "\033[1m\033[36m"    /* Bold Cyan */
#define BOLDWHITE "\033[1m\033[37m"   /* Bold White */
using namespace std::chrono;
// make a function prod which returns back boolean based on whether the
// environment variable "ENVIRONMENT" is set to "production" or not
bool prod() {
  // if the environment variable "ENVIRONMENT" is set to "production"
  dotenv::env.load_dotenv();
  if (dotenv::env["ENVIRONMENT"] == "production") {
    // return true
    return true;
  }
  // else return false
  return false;
}
// make a function called info which logs to the console at info level, takes in
// 2 parameters: type and message
void info(std::string type, std::string message) {
  // convert type to upper case
  std::transform(type.begin(), type.end(), type.begin(), ::toupper);
  // format message with std::format with parameter pack
  //  if type == "MAIN" make a variable called typecolor and set it to BOLDBLUE
  std::string typecolor;
  if (type == "MAIN") {
    typecolor = BOLDBLUE;
  }
  // if type == "SERVER" make a variable called typecolor and set it to
  // BOLDYELLOW
  else if (type == "SERVER") {
    typecolor = BOLDYELLOW;
  }
  // else if type == "CLIENT" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "CLIENT") {
    typecolor = BOLDCYAN;
  }
  // else if type == "DB" make a variable called typecolor and set it to
  // BOLDBLUE
  else if (type == "DB") {
    typecolor = BOLDBLUE;
  }
  // else if type == "RDLBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "RDLBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "ROVELBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "ROVELBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "LOCKDOWN" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "LOCKDOWN") {
    typecolor = BOLDRED;
  }
  // else if type == "SIGNAL" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "SIGNAL") {
    typecolor = BOLDRED;
  }
  // else if type == "QUEUE" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "QUEUE") {
    typecolor = BOLDCYAN;
  } else {
    typecolor = BOLDWHITE;
  }
  // get a formatted time string and store it in tm
  auto t = std::time(nullptr);
  auto tm = *std::localtime(&t);
  std::ostringstream oss;
  oss << std::put_time(&tm, "%d-%m-%Y %S:%M:%H");
  auto timestamp =
      duration_cast<milliseconds>(system_clock::now().time_since_epoch())
          .count();
  // concate oss and timestamp and put in variable time
  std::string time = oss.str() + " " + std::to_string(timestamp);
  // print to the console at info level
  if (!prod()) {
    std::cout << YELLOW << " I " << RESET << "| " << MAGENTA << time << RESET
              << " | " << typecolor << type << RESET << " : " << message
              << std::endl;
  } else {
    std::cout << "{\"lvl\":\"info\",\"type\":\"" << type << "\",\"msg\":\""
              << message << "\"}" << std::endl;
  }
}
// make a function called error which logs to the console at error level, takes
// in 2 parameters: type and message
void error(std::string type, std::string message) {
  // convert type to upper case
  std::transform(type.begin(), type.end(), type.begin(), ::toupper);
  // format message with std::format with parameter pack
  //  if type == "MAIN" make a variable called typecolor and set it to BOLDRED
  std::string typecolor;
  if (type == "MAIN") {
    typecolor = BOLDRED;
  }
  // if type == "SERVER" make a variable called typecolor and set it to
  // BOLDYELLOW
  else if (type == "SERVER") {
    typecolor = BOLDYELLOW;
  }
  // else if type == "CLIENT" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "CLIENT") {
    typecolor = BOLDCYAN;
  }
  // else if type == "DB" make a variable called typecolor and set it to
  // BOLDBLUE
  else if (type == "DB") {
    typecolor = BOLDBLUE;
  }
  // else if type == "RDLBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "RDLBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "ROVELBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "ROVELBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "LOCKDOWN" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "LOCKDOWN") {
    typecolor = BOLDRED;
  }
  // else if type == "SIGNAL" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "SIGNAL") {
    typecolor = BOLDRED;
  }
  // else if type == "QUEUE" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "QUEUE") {
    typecolor = BOLDCYAN;
  } else {
    typecolor = BOLDWHITE;
  }
  // get a formatted time string and store it in tm
  auto t = std::time(nullptr);
  auto tm = *std::localtime(&t);
  std::ostringstream oss;
  oss << std::put_time(&tm, "%d-%m-%Y %S:%M:%H");
  auto timestamp =
      duration_cast<milliseconds>(system_clock::now().time_since_epoch())
          .count();
  // concate oss and timestamp and put in variable time
  std::string time = oss.str() + " " + std::to_string(timestamp);
  // print to the console at error level
  if (!prod()) {
    std::cout << RED << " E " << RESET << "| " << MAGENTA << time << RESET
              << " | " << typecolor << type << RESET << " : " << message
              << std::endl;
  } else {
    std::cout << "{\"lvl\":\"error\",\"type\":\"" << type << "\",\"msg\":\""
              << message << "\"}" << std::endl;
  }
}
// make a function called debug which logs to the console at debug level, takes
// in 2 parameters: type and message
void debug(std::string type, std::string message) {
  // convert type to upper case
  std::transform(type.begin(), type.end(), type.begin(), ::toupper);
  // format message with std::format with parameter pack
  //  if type == "MAIN" make a variable called typecolor and set it to BOLDBLUE
  std::string typecolor;
  if (type == "MAIN") {
    typecolor = BOLDBLUE;
  }
  // if type == "SERVER" make a variable called typecolor and set it to
  // BOLDYELLOW
  else if (type == "SERVER") {
    typecolor = BOLDYELLOW;
  }
  // else if type == "CLIENT" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "CLIENT") {
    typecolor = BOLDCYAN;
  }
  // else if type == "DB" make a variable called typecolor and set it to
  // BOLDBLUE
  else if (type == "DB") {
    typecolor = BOLDBLUE;
  }
  // else if type == "RDLBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "RDLBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "ROVELBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "ROVELBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "LOCKDOWN" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "LOCKDOWN") {
    typecolor = BOLDRED;
  }
  // else if type == "SIGNAL" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "SIGNAL") {
    typecolor = BOLDRED;
  }
  // else if type == "QUEUE" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "QUEUE") {
    typecolor = BOLDCYAN;
  } else {
    typecolor = BOLDWHITE;
  }
  // get a formatted time string and store it in tm
  auto t = std::time(nullptr);
  auto tm = *std::localtime(&t);
  std::ostringstream oss;
  oss << std::put_time(&tm, "%d-%m-%Y %S:%M:%H");
  auto timestamp =
      duration_cast<milliseconds>(system_clock::now().time_since_epoch())
          .count();
  // concate oss and timestamp and put in variable time
  std::string time = oss.str() + " " + std::to_string(timestamp);
  // print to the console at debug level
  if (!prod()) {
    std::cout << BLUE << " D " << RESET << "| " << MAGENTA << time << RESET
              << " | " << typecolor << type << RESET << " : " << message
              << std::endl;
  } else {
    std::cout << "{\"lvl\":\"debug\",\"type\":\"" << type << "\",\"msg\":\""
              << message << "\"}" << std::endl;
  }
}

// make a function called warn which logs to the console at warn level, takes in
// 2 parameters: type and message
void warn(std::string type, std::string message) {
  // convert type to upper case
  std::transform(type.begin(), type.end(), type.begin(), ::toupper);
  // format message with std::format with parameter pack
  //  if type == "MAIN" make a variable called typecolor and set it to
  //  BOLDYELLOW
  std::string typecolor;
  if (type == "MAIN") {
    typecolor = BOLDYELLOW;
  }
  // if type == "SERVER" make a variable called typecolor and set it to
  // BOLDYELLOW
  else if (type == "SERVER") {
    typecolor = BOLDYELLOW;
  }
  // else if type == "CLIENT" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "CLIENT") {
    typecolor = BOLDCYAN;
  }
  // else if type == "DB" make a variable called typecolor and set it to
  // BOLDBLUE
  else if (type == "DB") {
    typecolor = BOLDBLUE;
  }
  // else if type == "RDLBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "RDLBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "ROVELBOT" make a variable called typecolor and set it to
  // BOLDGREEN
  else if (type == "ROVELBOT") {
    typecolor = BOLDGREEN;
  }
  // else if type == "LOCKDOWN" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "LOCKDOWN") {
    typecolor = BOLDRED;
  }
  // else if type == "SIGNAL" make a variable called typecolor and set it to
  // BOLDRED
  else if (type == "SIGNAL") {
    typecolor = BOLDRED;
  }
  // else if type == "QUEUE" make a variable called typecolor and set it to
  // BOLDCYAN
  else if (type == "QUEUE") {
    typecolor = BOLDCYAN;
  } else {
    typecolor = BOLDWHITE;
  }
  // get a formatted time string and store it in tm
  auto t = std::time(nullptr);
  auto tm = *std::localtime(&t);
  std::ostringstream oss;
  oss << std::put_time(&tm, "%d-%m-%Y %S:%M:%H");
  auto timestamp =
      duration_cast<milliseconds>(system_clock::now().time_since_epoch())
          .count();
  // concate oss and timestamp and put in variable time
  std::string time = oss.str() + " " + std::to_string(timestamp);
  // print to the console at warn level
  if (!prod()) {
    std::cout << YELLOW << " W " << RESET << "| " << MAGENTA << time << RESET
              << " | " << typecolor << type << RESET << " : " << message
              << std::endl;
  } else {
    std::cout << "{\"lvl\":\"warn\",\"type\":\"" << type << "\",\"msg\":\""
              << message << "\"}" << std::endl;
  }
}
} // namespace loggy