package com.eddchi.networkmonitor.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

// database table
@Entity
@Table(name = "network_agents")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NetworkAgent {

    // auto generated unique id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String hostname;

    @Column(nullable = false)
    private String ipAddress;

    @Column(nullable = false)
    private String status;

    private LocalDateTime lastSeen;

    private LocalDateTime createdAt;

    // auto inserts createdAt and lastSeen timestamps
    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
        lastSeen = LocalDateTime.now();
    }
}