#include <stdio.h>
int main(){
	int T;
	scanf("%d",&T);
	for(int i=0;i<T;i++){
		for(int j=0;j<i+1;j++){
		printf("*");
		}
		printf("\n");
	}
}