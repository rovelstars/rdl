#ifndef APIController_hpp
#define APIController_hpp
#include OATPP_CODEGEN_BEGIN(ApiController) //<-- Begin Codegen
/**
 *  Api Controller.
 */
class APIController : public oatpp::web::server::api::ApiController {
public:
  /**
   *  Constructor with object mapper.
   *  @param objectMapper - default object mapper used to serialize/deserialize
   * DTOs.
   */
  APIController(OATPP_COMPONENT(std::shared_ptr<ObjectMapper>, objectMapper))
      : oatpp::web::server::api::ApiController(objectMapper) {}

public:
  ENDPOINT("GET", "/api", root) {
    auto dto = MyDto::createShared();
    dto->statusCode = 200;
    dto->message = "ok";
    return createDtoResponse(Status::CODE_200, dto);
  }
};
#include OATPP_CODEGEN_END(ApiController) //<-- End Codegen
#endif /* APIController_hpp */