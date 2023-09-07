// Function written by ChatGPT

class RateLimiter {
    private limit: number; // Maximum allowed requests
    private interval: number; // Time window (in milliseconds)
    private requests: Map<string, number[]>; // In-memory storage for request timestamps

    constructor(limit: number, interval: number) {
        this.limit = limit;
        this.interval = interval;
        this.requests = new Map<string, number[]>();
    }

    isAllowed(key: string): boolean {
        const now = Date.now();
        const requests = this.requests.get(key) || [];

        // Remove expired timestamps
        const validRequests = requests.filter((timestamp) => now - timestamp <= this.interval);

        if (validRequests.length < this.limit) {
            // Add the current timestamp to the list
            validRequests.push(now);
            this.requests.set(key, validRequests);
            return true;
        } else {
            return false; // Rate limit exceeded
        }
    }
}

export default RateLimiter;