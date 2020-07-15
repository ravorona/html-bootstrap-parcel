export default class Main {
    readonly namespace!: string

    public constructor (namespace: string = 'HTML Boilerplate') {
        this.namespace = namespace.toLowerCase().replace(' ', '-')
        console.log('%s created', this.namespace)
    }

    public start (): void {
        console.log('%s started', this.namespace)
    }
}
