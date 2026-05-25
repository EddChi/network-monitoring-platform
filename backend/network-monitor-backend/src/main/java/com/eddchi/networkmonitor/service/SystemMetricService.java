package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.model.SystemMetric;
import com.eddchi.networkmonitor.repository.NetworkAgentRepository;
import com.eddchi.networkmonitor.repository.SystemMetricRepository;
import com.eddchi.networkmonitor.dto.MetricSummaryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SystemMetricService {

    private final SystemMetricRepository systemMetricRepository;
    private final NetworkAgentRepository networkAgentRepository;

    public SystemMetric recordMetric(Long agentId, SystemMetric metric) {

        NetworkAgent agent = networkAgentRepository.findById(agentId)
                .orElseThrow(() -> new RuntimeException("Agent not found"));

        metric.setNetworkAgent(agent);

        return systemMetricRepository.save(metric);
    }

    public List<SystemMetric> getMetricsByAgentId(Long agentId) {
        return systemMetricRepository.findByNetworkAgentIdOrderByRecordedAtDesc(agentId);
    }

    public MetricSummaryResponse getMetricSummary(Long agentId) {

        List<SystemMetric> metrics =
                systemMetricRepository.findByNetworkAgentIdOrderByRecordedAtDesc(agentId);

        if (metrics.isEmpty()) {
            return new MetricSummaryResponse(
                    0, 0, 0, 0,
                    0, 0, 0, 0
            );
        }

        double averageCpu = metrics.stream()
                .mapToDouble(SystemMetric::getCpuUsage)
                .average()
                .orElse(0);

        double averageMemory = metrics.stream()
                .mapToDouble(SystemMetric::getMemoryUsage)
                .average()
                .orElse(0);

        double averageDisk = metrics.stream()
                .mapToDouble(SystemMetric::getDiskUsage)
                .average()
                .orElse(0);

        double averageLatency = metrics.stream()
                .mapToDouble(SystemMetric::getNetworkLatencyMs)
                .average()
                .orElse(0);

        double maxCpu = metrics.stream()
                .mapToDouble(SystemMetric::getCpuUsage)
                .max()
                .orElse(0);

        double maxMemory = metrics.stream()
                .mapToDouble(SystemMetric::getMemoryUsage)
                .max()
                .orElse(0);

        double maxDisk = metrics.stream()
                .mapToDouble(SystemMetric::getDiskUsage)
                .max()
                .orElse(0);

        double maxLatency = metrics.stream()
                .mapToDouble(SystemMetric::getNetworkLatencyMs)
                .max()
                .orElse(0);

        return new MetricSummaryResponse(
                averageCpu,
                averageMemory,
                averageDisk,
                averageLatency,
                maxCpu,
                maxMemory,
                maxDisk,
                maxLatency
        );
    }
}