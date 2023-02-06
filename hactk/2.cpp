#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, m, k;
    cin >> n >> m >> k;
    int price[n];
    int disprice[n];
    int nutrition[n];

    for (int i = 0; i < n; i++)
    {
        cin >> price[i];
    }
    for (int i = 0; i < n; i++)
    {
        cin >> nutrition[i];
    }

    while (k--)
    {
        for (int i = 0; i < n; i++)
        {
            disprice[i] = price[i] / 2;
        }
    }

    int l =-1, index = -1,fn=-1,fn1=-1,fn2=-1;

    for(int p=0;p<n;p++)
    {
        for(int j=1;j<n;j++)
        
        {
            if((price[p]+disprice[j]) <=m)
            {
               if(nutrition[p] +nutrition[j] > fn)
               {
                   fn = nutrition[p] + nutrition[j] ;
               }
            }

        }
    }
    if(k>1)
    {
        for (int p = 0; p < n; p++)
        {
            for (int j = 1; j < n; j++)

            {
               if ((disprice[p] + disprice[j]) <= m)
               {
                   if (nutrition[p] + nutrition[j] > fn)
                   {
                       fn2 = nutrition[p] + nutrition[j];
                   }
               }
            }
        }
    }
   
    for (int i = 0; i < n; i++)
    {
        if (disprice[i] <=m && nutrition[i]>fn1)
        {
           // l = price[i];
            fn1=nutrition[i];
        }
    }

    // if(fn>fn1)
    // {
    //     cout<<fn ;
    // }
    // else
    // {
    //     cout << fn1 ;
    // }

    if (fn >= fn1 && fn >= fn2)
    {
        cout <<  fn  ;
    }
    else if (fn1 >= fn && fn1 >= fn2)
    {
        cout  << fn1;
    }
    else
    {
        cout << fn2 ;
    }
}