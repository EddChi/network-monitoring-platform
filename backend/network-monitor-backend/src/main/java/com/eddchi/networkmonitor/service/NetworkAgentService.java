package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.repository.NetworkAgentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NetworkAgentService {

    private final NetworkAgentRepository networkAgentRepository;

    public List<NetworkAgent> getAllAgents() {
        return networkAgentRepository.findAll();
    }

    // agent status filtering
    public List<NetworkAgent> getAgentsByStatus(String status) {
        return networkAgentRepository.findByStatus(status);
    }

    public NetworkAgent getAgentById(Long id) {
        return networkAgentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agent not found"));
    }

    public NetworkAgent createAgent(NetworkAgent networkAgent) {
        return networkAgentRepository.save(networkAgent);
    }

    public void deleteAgent(Long id) {
        networkAgentRepository.deleteById(id);
    }

    // agent heartbeat updates
    public NetworkAgent updateHeartbeat(Long id) {

        NetworkAgent agent = networkAgentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agent not found"));

        agent.setLastSeen(LocalDateTime.now());
        agent.setStatus("ONLINE");

        return networkAgentRepository.save(agent);
    }
}