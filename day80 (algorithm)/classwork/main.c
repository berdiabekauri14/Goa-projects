#include <stdio.h>
/* copy input to output; 1st version*/

int main( )
{
    int c;
    c = getchar();
    while (c  != EOF)
    {
        putchar(c);
        c = getchar();
    }
    printf("Obtained c=EOF is %d/n")
    return 0;
}