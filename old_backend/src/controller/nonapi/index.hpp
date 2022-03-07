#ifndef NonAPI_hpp
#define NonAPI_hpp

#include "../../dto/DTOs.hpp"
#include <iostream>
#include "oatpp/web/server/api/ApiController.hpp"
#include "oatpp/core/macro/codegen.hpp"
#include "oatpp/core/macro/component.hpp"

#include OATPP_CODEGEN_BEGIN(ApiController) //<-- Begin Codegen

/**
 * NonAPI.
 */
class NonAPI : public oatpp::web::server::api::ApiController {
public:
  /**
   * Constructor with object mapper.
   * @param objectMapper - default object mapper used to serialize/deserialize DTOs.
   */
  NonAPI(OATPP_COMPONENT(std::shared_ptr<ObjectMapper>, objectMapper))
    : oatpp::web::server::api::ApiController(objectMapper)
  {}
public:
  ENDPOINT("GET", "/", root) {
    //create nlohmann json object with statusCode and message
    auto json = nlohmann::json::object();
    json["statusCode"] = 200;
    json["message"] = "Hello World!";
    return createResponse(Status::CODE_200, json.dump());
  }
};

#include OATPP_CODEGEN_END(ApiController) //<-- End Codegen

#endif /* NonAPI_hpp */
