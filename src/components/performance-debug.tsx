"use client";

import { useEffect, useState } from 'react';
import { PerformanceMonitor } from '@/lib/performance-monitor';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  jsHeapSize: number;
}

export function PerformanceDebug() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    frameTime: 0,
    jsHeapSize: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
      const monitor = PerformanceMonitor.getInstance();
      
      const updateMetrics = (newMetrics: PerformanceMetrics) => {
        setMetrics(newMetrics);
      };

      monitor.subscribe(updateMetrics);

      return () => {
        monitor.unsubscribe(updateMetrics);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg text-white/90 font-mono text-sm z-50"
    >
      <h4 className="text-xs uppercase mb-2 text-white/50">Performance Metrics</h4>
      <div className="space-y-1">
        <p>FPS: <span className={`${metrics.fps < 30 ? 'text-red-400' : 'text-green-400'}`}>{metrics.fps.toFixed(1)}</span></p>
        <p>Frame Time: <span className="text-blue-400">{metrics.frameTime.toFixed(2)}ms</span></p>
        <p>JS Heap: <span className="text-purple-400">{(metrics.jsHeapSize / (1024 * 1024)).toFixed(1)}MB</span></p>
      </div>
    </motion.div>
  );
}