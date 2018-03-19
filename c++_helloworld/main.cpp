// my first program in C++
#include <iostream>
#include <string>
using namespace std;

void printHello()
{
  cout << "Hello World!\n";
  cout << "Enter a number: ";
  int number;
  cin >> number;
  cout << "Enter a second number: ";
  int number2;
  cin >> number2;
  cout << "The sum of ";
  cout << number;
  cout << " + ";
  cout << number2;
  cout << " = ";
  int sum = number + number2;
  cout << sum;
  cout << "\n";
}

int main()
{
  printHello();
  return 0;
}