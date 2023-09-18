#include <stdio.h>
#include<bits/stdc++.h>
int main()
{
    string s = "cat mat cat batman row" ;
    vector<string> v,ans ;
    int k = 0 ;
    string p = "" ;
   for(int i = 0 ;i<s.size() ; i++){
    p+=s[i] ;
    if(s[i]== ' '){
        v.push_back(p) ;
        p="" ;
        k = i ;
    }
   }
   string r= "" ;
   for(int i=k+1 ; i<s.size() ; i++){
       r+=s[i] ;
   }
   v.push_back(r) ;
   map<string , int> m ;
   for(int i = 0 ;i<v.size() ; i++){
       m[v[i]]++;
       if(m[v[i]] > 1){
           ans.push_back(v[i]);
       }
   }
   for(int i = 0 ;i<ans.size() ; i++){
       cout<<ans[i]<<" " ;
   }

    return 0;
}