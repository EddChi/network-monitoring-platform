package com.eddchi.networkmonitor.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "system_metrics")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SystemMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double cpuUsage;
    private double memoryUsage;
    private double diskUsage;
    private double networkLatencyMs;

    private LocalDateTime recordedAt;

    @ManyToOne
    @JoinColumn(name = "agent_id")
    private NetworkAgent networkAgent;

    @PrePersist
    public void prePersist() {
        recordedAt = LocalDateTime.now();
    }
}