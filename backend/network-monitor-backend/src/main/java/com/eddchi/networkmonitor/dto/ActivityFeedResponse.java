package com.eddchi.networkmonitor.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ActivityFeedResponse {

    private String activityType;
    private String message;
    private String hostname;
    private LocalDateTime timestamp;
}