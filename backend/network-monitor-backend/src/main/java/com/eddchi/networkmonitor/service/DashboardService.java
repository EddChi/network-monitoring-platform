package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.dto.DashboardSummaryResponse;
import com.eddchi.networkmonitor.repository.AlertRepository;
import com.eddchi.networkmonitor.repository.NetworkAgentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final NetworkAgentRepository networkAgentRepository;
    private final AlertRepository alertRepository;

    public DashboardSummaryResponse getSummary() {

        long totalAgents = networkAgentRepository.count();
        long onlineAgents = networkAgentRepository.findByStatus("ONLINE").size();
        long offlineAgents = networkAgentRepository.findByStatus("OFFLINE").size();

        long totalAlerts = alertRepository.count();
        long criticalAlerts = alertRepository.findAll()
                .stream()
                .filter(alert -> alert.getSeverity().equals("CRITICAL"))
                .count();

        return new DashboardSummaryResponse(
                totalAgents,
                onlineAgents,
                offlineAgents,
                totalAlerts,
                criticalAlerts
        );
    }
}