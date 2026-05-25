package com.eddchi.networkmonitor.repository;

import com.eddchi.networkmonitor.model.NetworkAgent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NetworkAgentRepository extends JpaRepository<NetworkAgent, Long> {

    // query derivation
    List<NetworkAgent> findByStatus(String status);

    // agent search + filtering
    List<NetworkAgent> findByHostnameContainingIgnoreCase(String hostname);

    List<NetworkAgent> findByHostnameContainingIgnoreCaseAndStatus(
            String hostname,
            String status
    );

}