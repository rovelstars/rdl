    // make a object named "locked" which consists of booleans server, bots, static
// and dynamic
struct Locked {
    bool server;
    bool bots;
    bool ssr;
};
    Locked locked;
    bool lockdown = true;
namespace lockdownSerice {
    // make a private function called notify which takes name and state
// and logs via loggy
void notify(std::string name, bool state) {
    if (state) {
        loggy::info("LOCKDOWN", "Lockdown for " + name + " has started");
    } else {
        loggy::info("LOCKDOWN", "Lockdown for " + name + " has ended");
    }
}
 // make a function named server which takes a boolean named "state" and updates the locked struct
void server(bool state) {
    if(state!=locked.server) {
        locked.server = state;
        notify("server", state);
    }
}
    // make a function named bots which takes a boolean named "state" and updates the locked struct
void bots(bool state) {
    if(state!=locked.bots) {
        locked.bots = state;
        notify("bots", state);
    }
}
    // make a function named ssr which takes a boolean named "state" and updates the locked struct
void ssr(bool state) {
    if(state!=locked.ssr) {
        locked.ssr = state;
        notify("ssr", state);
    }
}
    // make a function named "lockdown" which initilizes the lockdown service
void start() { loggy::info("LOCKDOWN", "Starting Lockdown Service");
lockdown = false;
server(true);
bots(true);
ssr(true);
 }
 void stop() { loggy::info("LOCKDOWN", "Stopping Lockdown Service");
 lockdown = true;
 }
} // namespace lockdown