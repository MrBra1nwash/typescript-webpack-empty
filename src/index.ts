import { SpiritBreaker } from './spirit-breaker';
import { Enemy } from './model/enemy.model';

const enemy: Enemy = { name: 'Seijūrō Akashi', health: 100 };
const sb = new SpiritBreaker();
sb.charge(enemy);
