#include <iostream>
#include <string>
using namespace std;

extern "C" {

int compile_code(string code)
{
    if(code.find("print") != string::npos)
    {
        return 1; // valid syntax
    }

    return 0;
}

}
