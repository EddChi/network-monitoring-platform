package com.eddchi.networkmonitor.repository;

import com.eddchi.networkmonitor.model.SystemMetric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SystemMetricRepository
        extends JpaRepository<SystemMetric, Long> {

    List<SystemMetric> findByNetworkAgentIdOrderByRecordedAtDesc(Long agentId);
}