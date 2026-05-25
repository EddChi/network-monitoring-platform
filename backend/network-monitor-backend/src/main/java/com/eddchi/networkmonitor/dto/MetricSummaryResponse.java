package com.eddchi.networkmonitor.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MetricSummaryResponse {

    private double averageCpuUsage;
    private double averageMemoryUsage;
    private double averageDiskUsage;
    private double averageNetworkLatencyMs;

    private double maxCpuUsage;
    private double maxMemoryUsage;
    private double maxDiskUsage;
    private double maxNetworkLatencyMs;
}