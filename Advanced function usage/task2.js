function recursiveCountdown(num) {
  if (num < 0) return;
  console.log(num);
  recursiveCountdown(num - 1);
}

recursiveCountdown(5);
