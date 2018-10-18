import equal from 'deep-equal';

export const setTrap = (dep, key, value, context) => {
  if (equal(Reflect.get(dep.target, key, context), value)) {
    // do not update or notify if deep equal
    return true;
  }

  // update key
  Reflect.set(dep.target, key, value, context);

  // notify subscribers
  dep.notify();
  return true;
};
