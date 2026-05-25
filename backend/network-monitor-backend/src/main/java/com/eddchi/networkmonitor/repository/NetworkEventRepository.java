package com.eddchi.networkmonitor.repository;

import com.eddchi.networkmonitor.model.NetworkEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NetworkEventRepository extends JpaRepository<NetworkEvent, Long> {

    void deleteByNetworkAgentId(Long agentId);

    List<NetworkEvent> findByNetworkAgentIdOrderByTimestampDesc(Long agentId);

    List<NetworkEvent> findTop10ByOrderByTimestampDesc();
}