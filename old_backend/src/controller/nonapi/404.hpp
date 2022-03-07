#ifndef NonAPI404_hpp
#define NonAPI404_hpp
#include OATPP_CODEGEN_BEGIN(ApiController) //<-- Begin Codegen
/**
 *  Api Controller.
 */
class NonAPI404 : public oatpp::web::server::api::ApiController {
public:
  /**
   *  Constructor with object mapper.
   *  @param objectMapper - default object mapper used to serialize/deserialize
   * DTOs.
   */
  NonAPI404(OATPP_COMPONENT(std::shared_ptr<ObjectMapper>, objectMapper))
      : oatpp::web::server::api::ApiController(objectMapper) {}

public:
  ENDPOINT("GET", "/*", root) {
    //create nlohmann json object with statusCode and message
    auto json = nlohmann::json::object();
    json["statusCode"] = 404;
    return createResponse(Status::CODE_404, json.dump());
  }
};
#include OATPP_CODEGEN_END(ApiController) //<-- End Codegen
#endif /* APIController_hpp */