const instanceMap = new Map()

function getSingleInstance<T>(instance: {new(): T}): T {
  if (!instanceMap.has(instance)) {
    instanceMap.set(instance, new instance())
  }
  return instanceMap.get(instance)
}

function delInstance<T>(instance: T) {
  instanceMap.delete(instance)
}

export {
  getSingleInstance,
  delInstance
}