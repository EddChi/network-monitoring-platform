package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.model.SystemMetric;
import com.eddchi.networkmonitor.repository.NetworkAgentRepository;
import com.eddchi.networkmonitor.repository.SystemMetricRepository;
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
}