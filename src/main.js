import { getPosture } from 'posture';
import { getGunPosition } from 'gun';

export function start() {
  const posture = getPosture();
  const gunPosition = getGunPosition();
  mapi.tip(`${posture} - ${ gunPosition }`, 1)
}
