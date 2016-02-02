declare var Rx: any;

class Dispatcher<IAction> {

    constructor() {
        this.subject = new Rx.Subject();
    }

    dispatch(action: IAction): void {
        this.subject.next(action);
    }

    add(subscription: any) {
        this.subject.add(subscription);
    }

    subject;
}