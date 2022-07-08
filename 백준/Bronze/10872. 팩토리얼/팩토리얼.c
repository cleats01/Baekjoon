#include <stdio.h>
int main(){
	int N;
	int r = 1;
	scanf("%d",&N);
	for(int i=N;i>0;i--){
		r *= i;
	}
	printf("%d",r);
}