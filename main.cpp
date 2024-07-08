#include <iostream>
#include <ctime>
#include <algorithm>
using namespace std;

int main (){
  double scores[] = {3.88, 29.09, 5.57, 2.31, 4.02, 2.31, 4.02, 1.35, 1.08, 7.52, 1.09, 1.29,};
  int size = sizeof(scores)/sizeof(scores[0]);
  double sum;

  for (int i = 0; i < size; i++){
    sum += scores[i];
  }
  double avarage = (sum/size);

  
  cout << avarage; 
  

    return 0;
}
