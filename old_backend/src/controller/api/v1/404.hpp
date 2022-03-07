#ifndef API404_hpp
#define API404_hpp
#include OATPP_CODEGEN_BEGIN(ApiController) //<-- Begin Codegen
/**
 *  Api Controller.
 */
class API404 : public oatpp::web::server::api::ApiController {
public:
  /**
   *  Constructor with object mapper.
   *  @param objectMapper - default object mapper used to serialize/deserialize
   * DTOs.
   */
  API404(OATPP_COMPONENT(std::shared_ptr<ObjectMapper>, objectMapper))
      : oatpp::web::server::api::ApiController(objectMapper) {}

public:
  ENDPOINT("GET", "/api/*", root) {
    //create nlohmann json object with statusCode and message
    auto json = nlohmann::json::object();
    json["statusCode"] = 404;
    return createResponse(Status::CODE_404, json.dump());
  }
};
#include OATPP_CODEGEN_END(ApiController) //<-- End Codegen
#endif /* APIController_hpp */