function longestCommonSubsequence(text1: string, text2: string): number {
  const length1 = text1.length;
  const length2 = text2.length;
  const dp: number[][] = Array.from({ length: length1 }, () => []);

  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      const prevTop = i === 0 ? 0 : dp[i - 1][j];
      const prevLeft = j === 0 ? 0 : dp[i][j - 1];
      const prevTopLeft = i === 0 || j === 0 ? 0 : dp[i - 1][j - 1];
      const isMatch = text1[i] === text2[j];
      dp[i][j] = isMatch ? prevTopLeft + 1 : Math.max(prevTop, prevLeft);
    }
  }

  return dp[length1 - 1][length2 - 1];
}

// hint
// Try dynamic programming. DP[i][j] represents the longest common subsequence of text1[0 ... i] & text2[0 ... j].
// "abcde"
// "ace"
/*

    a,  a,  a
    a,  a,  a
    a, ac, ac
    a, ac, ac 
    a, ac, ace
    */
