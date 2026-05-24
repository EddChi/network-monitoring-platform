package com.eddchi.networkmonitor.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "network_events")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NetworkEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventType;

    private String description;

    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "agent_id")
    private NetworkAgent networkAgent;

    @PrePersist
    public void prePersist() {
        timestamp = LocalDateTime.now();
    }
}