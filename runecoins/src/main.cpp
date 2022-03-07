#include <nlohmann/json.hpp>
#include <openssl/sha.h>

namespace runecoin {

// create a class for transaction
class Transaction {
private:
  std::string sender;
  std::string reciever;
  int amount;

public:
  Transaction(std::string sender, std::string reciever, int amount) {
    this->sender = sender;
    this->reciever = reciever;
    this->amount = amount;
  };
  std::string getSender() { return this->sender; };
  std::string getReciever() { return this->reciever; };
  int getAmount() { return this->amount; };
  std::string toString() {
    // create a json object of transaction
    nlohmann::json transaction = {{"sender", this->sender},
                                  {"reciever", this->reciever},
                                  {"amount", this->amount}};
    // return the json object as a string
    return transaction.dump();
  };
};

class Block {
private:
  std::string previousHash;
  std::string transaction;
  int64_t timestamp;

public:
  Block(std::string previousHash, auto transaction) {
    this->previousHash = previousHash;
    this->transaction = transaction.toString();
    this->timestamp =
        duration_cast<milliseconds>(system_clock::now().time_since_epoch())
            .count();
  };
  std::string getPreviousHash() { return this->previousHash; };
  std::string getTransaction() { return this->transaction; };
  int64_t getTimestamp() { return this->timestamp; };
  // create a function called makeHash that returns the hash of the block
  std::string makeHash() {
    unsigned char hash[SHA256_DIGEST_LENGTH];
    SHA256_CTX sha256;
    SHA256_Init(&sha256);
    SHA256_Update(&sha256, this->, str.size());
    SHA256_Final(hash, &sha256);
    stringstream ss;
    for (int i = 0; i < SHA256_DIGEST_LENGTH; i++) {
      ss << hex << setw(2) << setfill('0') << (int)hash[i];
    }
    re turn ss.str();
  }
};

};
}

int main() { return 0; }