// Given a string, write program to check if it is palindrome or not

#include <bits/stdc++.h>
#include <string.h>

#include <iostream>
using namespace std;

bool IsPalindrome(string& str) {
  // take a temp str
  string rev = str;

  // reverse the string
  reverse(rev.begin(), rev.end());

  // return true if it is palindrome
  return (rev == str);
}

// efficient solution

bool IsPol(string& str) {
  int start = 0;
  int end = str.length() - 1;

  while (start < end) {
    if (str[start] != str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

int main() {
  string str = "abcba";

  // call the function
  cout << IsPalindrome(str) << endl;
  cout << IsPol(str);
}