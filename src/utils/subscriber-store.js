class SubscriberStore {
  constructor(store) {
    this.store = store
    this.subscriptions = {}
  }

  subscribe({ onNext }) {
    let dispose = this.store.subscribe(() => onNext(this.store.getState()));
    const id    = Date.now
    onNext(this.store.getState());
    this.subscriptions[id] = { dispose }
    return id;
  }

  unsubscribe(id) {
    this.subscriptions[id].dispose()
  }

  unsubscribeAll() {
    this.subscriptions.forEach(subscription => (subscription.dispose()))
  }
}

export default SubscriberStore

/*function toObservable(store) {
    return {
      subscribe({ onNext }) {
        let dispose = store.subscribe(() => onNext(store.getState()));
        onNext(store.getState());
        return { dispose };
      }
    }
}*/