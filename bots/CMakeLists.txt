# minimum CMake version required
cmake_minimum_required(VERSION 3.15)

# Project name, version and description
project(rdl.bot VERSION 1.0 DESCRIPTION "RDL bot")

# Create an executable
add_executable(${PROJECT_NAME}
    src/main.cpp
    # your others files...
)

# add dependencies
include(../CPM.cmake)
CPMAddPackage(
  NAME Ccache.cmake
  GITHUB_REPOSITORY TheLartians/Ccache.cmake
  VERSION 1.2
)
CPMAddPackage("gh:brainboxdotcc/DPP@9.0.18")
CPMAddPackage("gh:adeharo9/cpp-dotenv@1.0.0-alpha")


# package lock to lock down to specific versions of deps
CPMUsePackageLock(package-lock.cmake)

# Linking libraries

target_link_libraries(${PROJECT_NAME}
    dpp
    cpp_dotenv
)
 
# Specify includes

target_include_directories(${PROJECT_NAME} PRIVATE
    libs/DPP/include
)
 
# Set C++ version
set_target_properties(${PROJECT_NAME} PROPERTIES
    CXX_STANDARD 20
    CXX_STANDARD_REQUIRED ON
)
