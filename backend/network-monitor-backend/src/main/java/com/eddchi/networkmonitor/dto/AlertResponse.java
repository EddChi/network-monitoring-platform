package com.eddchi.networkmonitor.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class AlertResponse {

    private Long id;
    private String alertType;
    private String message;
    private String severity;
    private LocalDateTime createdAt;

    private Long agentId;
    private String hostname;
    private String agentStatus;
}