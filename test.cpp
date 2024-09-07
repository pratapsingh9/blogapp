#include <queue>
using namespace std;
#include <iostream>

int main() {
    int arr[] = {6,5,3,2,8,10,9};
    int k = 3;
    int n = 7;
    priority_queue<int , vector<int> ,greater<int>> pq;
    vector<int> ans;
    for(int i = 0; i<n; i++) {
        pq.push(arr[i]);
        if (pq.size() > k)
        {
            /* code */
            ans.push_back(pq.top());
            pq.pop();
        }
        
    }
    while (pq.size() > 0)
    {
        ans.push_back(pq.top());
        pq.pop();
        /* code */
    }
    for (int i = 0; i < ans.size(); i++)
    {
        /* code */
        cout << ans[i] << " " ;
    }
    
}