#ifndef API_hpp
#define API_hpp
#include OATPP_CODEGEN_BEGIN(ApiController) //<-- Begin Codegen
/**
 *  Api Controller.
 */
class API : public oatpp::web::server::api::ApiController {
public:
  /**
   *  Constructor with object mapper.
   *  @param objectMapper - default object mapper used to serialize/deserialize
   * DTOs.
   */
  API(OATPP_COMPONENT(std::shared_ptr<ObjectMapper>, objectMapper))
      : oatpp::web::server::api::ApiController(objectMapper) {}

public:
  ENDPOINT("GET", "/api/v1", root) {
    //create nlohmann json object with statusCode and message
    auto json = nlohmann::json::object();
    json["statusCode"] = 200;
    json["message"] = "Hello World!";
    return createResponse(Status::CODE_200, json.dump());
  }
};
#include OATPP_CODEGEN_END(ApiController) //<-- End Codegen
#endif /* API_hpp */