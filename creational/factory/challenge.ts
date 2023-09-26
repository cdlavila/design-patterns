// 1
interface HttpAdapter {
    framework: string;
    get(): void;
    post(): void;
    put(): void;
    patch(): void;
    delete(): void;
}

// 2
class RestHttpAdapter implements HttpAdapter {
    framework: string;

    constructor(type: string) {
        this.framework = type;
    }

    /** @implements */
    get(): void {
        console.log('GET using ' + this.framework);
    }

    /** @implements */
    post(): void {
        console.log('POST using ' + this.framework);
    }

    /** @implements */
    put(): void {
        console.log('PUT using ' + this.framework);
    }

    /** @implements */
    patch(): void {
        console.log('PATCH using ' + this.framework);
    }

    /** @implements */
    delete(): void {
        console.log('DELETE using ' + this.framework);
    }
}

// 3
interface HttpAdapterFactory {
    makeAdapter(framework: string): HttpAdapter;
}

// 4
class RestHttpAdapterFactory implements HttpAdapterFactory {
    /** @implements */
    makeAdapter(type: string): HttpAdapter {
        return new RestHttpAdapter(type);
    }
}

// test
((): void => {
    const factory: HttpAdapterFactory = new RestHttpAdapterFactory();

    const expressHttpAdapter: HttpAdapter = factory.makeAdapter('Express');
    expressHttpAdapter.get();
    expressHttpAdapter.post();
    expressHttpAdapter.put();
    expressHttpAdapter.patch();
    expressHttpAdapter.delete();

    const fastifyHttpAdapter: HttpAdapter = factory.makeAdapter('Fastify');
    fastifyHttpAdapter.get();
    fastifyHttpAdapter.post();
    fastifyHttpAdapter.put();
    fastifyHttpAdapter.patch();
    fastifyHttpAdapter.delete();
})()