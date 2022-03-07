namespace signalHandler{
    void execute(int code){
        loggy::info("SIGNAL", ("Received SIGINT with code: " + std::to_string(code)));
        exit(0);
    }
}