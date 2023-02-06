#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, m, k;
    cin >> n >> m >> k;
    int price[n];
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
            price[i] = price[i] / 2;
        }
    }
    int l = 100, index = -1;
    for (int i = 0; i < n; i++)
    {
        if (price[i] < l)
        {
            l = price[i];
            index = i;
        }
    }

    cout << nutrition[index];
}