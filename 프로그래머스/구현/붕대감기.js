function solution(bandage, health, attacks) {
  const maxHealth = health;
  let currentAttack = 0;

  for (const [attackTime, damage] of attacks) {
    const term = attackTime - currentAttack - 1;
    health += bandage[2] * Math.floor(term / bandage[0]) + bandage[1] * term;
    if (health >= maxHealth) {
      health = maxHealth;
    }
    health -= damage;
    if (health <= 0) {
      return -1;
    }
    currentAttack = attackTime;
  }
  return health;
}

/**
 * 00:38:57
 * 공격시간 사이의 텀을 구해 그 간격이 보너스 점수 시간보다 길면 보너스 점수를 주는 방식..
 */
