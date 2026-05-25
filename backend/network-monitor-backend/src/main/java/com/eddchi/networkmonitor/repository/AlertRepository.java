package com.eddchi.networkmonitor.repository;

import com.eddchi.networkmonitor.model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlertRepository extends JpaRepository<Alert, Long> {

    List<Alert> findByNetworkAgentIdOrderByCreatedAtDesc(Long agentId);
}