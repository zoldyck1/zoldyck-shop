/**
 * Performance monitoring utility for tracking FPS and animation performance
 * @module performance-monitor
 */

interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  jsHeapSize: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {
    fps: 0,
    frameTime: 0,
    jsHeapSize: 0
  };
  private frameCount = 0;
  private lastTime = performance.now();
  private callbacks: ((metrics: PerformanceMetrics) => void)[] = [];

  private constructor() {
    this.startMonitoring();
  }

  /**
   * Get the singleton instance of PerformanceMonitor
   */
  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Start monitoring performance metrics
   */
  private startMonitoring(): void {
    const updateMetrics = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - this.lastTime;

      this.frameCount++;

      if (deltaTime >= 1000) { // Update every second
        this.metrics = {
          fps: Math.round((this.frameCount * 1000) / deltaTime),
          frameTime: deltaTime / this.frameCount,
          jsHeapSize: (performance as any).memory?.usedJSHeapSize || 0
        };

        this.frameCount = 0;
        this.lastTime = currentTime;

        // Notify all subscribers
        this.callbacks.forEach(callback => callback(this.metrics));
      }

      requestAnimationFrame(updateMetrics);
    };

    requestAnimationFrame(updateMetrics);
  }

  /**
   * Subscribe to performance metrics updates
   * @param callback Function to be called with updated metrics
   */
  public subscribe(callback: (metrics: PerformanceMetrics) => void): void {
    this.callbacks.push(callback);
  }

  /**
   * Unsubscribe from performance metrics updates
   * @param callback Function to be removed from subscribers
   */
  public unsubscribe(callback: (metrics: PerformanceMetrics) => void): void {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}