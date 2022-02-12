# minimum CMake version required
cmake_minimum_required(VERSION 3.15)

# Project name, version and description
project(rdl.server VERSION 1.0 DESCRIPTION "RDL server")
set(DAMQP-CPP_LINUX_TCP "ON")
# Create an executable
add_executable(${PROJECT_NAME}
    src/App.cpp
    # your others files...
)

# add dependencies
include(../CPM.cmake)
CPMAddPackage(
  NAME Ccache.cmake
  GITHUB_REPOSITORY TheLartians/Ccache.cmake
  VERSION 1.2
)
CPMAddPackage("gh:adeharo9/cpp-dotenv@1.0.0-alpha")
CPMAddPackage("gh:oatpp/oatpp#1.3.0")
CPMAddPackage("gh:zeromq/cppzmq#v4.8.1")
CPMAddPackage("gh:cpp-redis/cpp_redis#master")
CPMAddPackage(
  NAME nlohmann_json
  VERSION 3.10.5
  URL https://github.com/nlohmann/json/releases/download/v3.10.5/include.zip
  URL_HASH SHA256=b94997df68856753b72f0d7a3703b7d484d4745c567f3584ef97c96c25a5798e
)

# package lock to lock down to specific versions of deps
CPMUsePackageLock(package-lock.cmake)

# Linking libraries
find_package(Threads REQUIRED)

target_link_libraries(${PROJECT_NAME}
    cpp_dotenv
    oatpp
    zmq
    cpp_redis
    ${CMAKE_THREAD_LIBS_INIT}
)
 
# Specify includes
target_include_directories(${PROJECT_NAME} PRIVATE
    node/include
    ${nlohmann_json_SOURCE_DIR}/include
    ${cpp_redis_SOURCE_DIR}/includes
)
 
# Set C++ version
set_target_properties(${PROJECT_NAME} PROPERTIES
    CXX_STANDARD 20
    CXX_STANDARD_REQUIRED ON
)

# Set linker flags, hide warnings
target_compile_options(${PROJECT_NAME} PRIVATE
 -w
)