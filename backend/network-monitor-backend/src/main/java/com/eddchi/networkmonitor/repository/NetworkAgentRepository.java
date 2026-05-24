package com.eddchi.networkmonitor.repository;

import com.eddchi.networkmonitor.model.NetworkAgent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NetworkAgentRepository extends JpaRepository<NetworkAgent, Long> {
}