#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v = {2, 4, 8, 2, 10, 4, 91, 34, 9, 2, 49, 5};
    int n = v.size();
    int k = 3; // Window size
    int ans = 0;
    int maxsum = INT_MIN;

    // Calculate the sum of the first window
    for (int i = 0; i < k; i++) {
        ans += v[i];
    }
    maxsum = ans;
    int j = 0; 
    for (int i = k; i < n; i++) {
        // Slide the window right: subtract the element going out and add the new element coming in
        ans = ans + v[i] - v[j];
        j += 1;
        maxsum = max(maxsum, ans);
    }

    cout << maxsum << endl;

    return 0;
}
