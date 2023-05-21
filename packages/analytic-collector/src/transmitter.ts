export class AnalyticTransmitter {
    async collect(data: Partial<AnalyticData>): Promise<void> { }
    async captureEvent(id: string, data: Partial<EventData>): Promise<void> { }
}