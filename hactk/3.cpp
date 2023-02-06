#include <bits/stdc++.h>
using namespace std;

int tribo(int n1, int n2, int n3);

int tribo(int n1, int n2, int n3)
{
    return (n1 + n2 + n3);
}

int main()
{
    // int N;
    // cin >> N;
    // int arr[N];

    int n;
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int length = 3;
    for (int i = 3; i < n; i++)
    {

        if ((arr[i]) == (arr[i - 1] + arr[i - 2] + arr[i - 3]))
        {
            length++;
        }
    }

    cout << length;
}
