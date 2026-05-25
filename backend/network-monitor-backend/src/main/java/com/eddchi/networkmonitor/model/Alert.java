package com.eddchi.networkmonitor.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "alerts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String alertType;

    private String message;

    private String severity;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "agent_id")
    private NetworkAgent networkAgent;

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
    }
}