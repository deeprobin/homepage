import { AnalyticTransmitter } from "./transmitter";

export class AnalyticCollector {
    private readonly analyticTransmitter: AnalyticTransmitter = new AnalyticTransmitter();
    private abortController: AbortController | null = null;

    constructor(private window: Window, private trackingToken: string | null = null) {
    }

    startSession(): void {
        this.abortController = new AbortController();
        if ('scheduler' in this.window) {
            const scheduler = (this.window as any).scheduler;
            scheduler.postTask(() => this.run(this.abortController!.signal), { priority: 'background', signal: this.abortController.signal });
        } else {
            setTimeout(() => this.run(this.abortController!.signal), 0);
        }
    }

    private async run(signal: AbortSignal): Promise<void> {
        this.analyticTransmitter.collect({
            trackingToken: this.trackingToken,
            userAgent: this.window.navigator.userAgent,
            platform: this.window.navigator.platform,
            vendor: this.window.navigator.vendor,
            language: this.window.navigator.language,
            hardwareConcurrency: this.window.navigator.hardwareConcurrency,
            devicePixelRatio: this.window.devicePixelRatio
        });
    }
}