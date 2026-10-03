


class QuickFlagsStore {

    constructor() {
        this.store = new Map()
    }



    function getFlag(id: string) {
       return this.store.get(id)
    }

    function setFlag(id: string, value: unknown) {
        return thisstore.set(id, value)
    }
}