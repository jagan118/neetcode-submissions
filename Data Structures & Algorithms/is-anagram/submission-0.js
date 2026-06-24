class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
   isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let res = false;

        for(let i = 0;i<t.length;i++){
            if(s.includes(t[i])&&t.includes(s[i]))    { res = true; }
            else    {res = false;}
        }

        if(res) {return true}
        else    {return false}
    }
}
