package com.eddchi.networkmonitor.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardSummaryResponse {

    private long totalAgents;
    private long onlineAgents;
    private long offlineAgents;

    private long totalAlerts;
    private long criticalAlerts;
}