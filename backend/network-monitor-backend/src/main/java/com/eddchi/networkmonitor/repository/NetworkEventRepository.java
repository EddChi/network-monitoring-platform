package com.eddchi.networkmonitor.repository;

import com.eddchi.networkmonitor.model.NetworkEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NetworkEventRepository extends JpaRepository<NetworkEvent, Long> {

    void deleteByNetworkAgentId(Long agentId);
}