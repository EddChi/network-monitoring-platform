package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.exception.ResourceNotFoundException;
import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.repository.NetworkAgentRepository;
import com.eddchi.networkmonitor.repository.NetworkEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
                .orElseThrow(() ->
                        new ResourceNotFoundException("Agent not found"));
    }

    public NetworkAgent createAgent(NetworkAgent networkAgent) {

        NetworkAgent savedAgent =
                networkAgentRepository.save(networkAgent);

        networkEventService.recordEvent(
                savedAgent,
                "AGENT_CREATED",
                "New network agent registered"
        );

        return savedAgent;
    }

    @Transactional
    public void deleteAgent(Long id) {
        networkEventRepository.deleteByNetworkAgentId(id);
        networkAgentRepository.deleteById(id);
    }

    // agent heartbeat updates
    public NetworkAgent updateHeartbeat(Long id) {

        NetworkAgent agent = networkAgentRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Agent not found"));

        agent.setLastSeen(LocalDateTime.now());
        agent.setStatus("ONLINE");

        NetworkAgent updatedAgent =
                networkAgentRepository.save(agent);

        networkEventService.recordEvent(
                updatedAgent,
                "HEARTBEAT_RECEIVED",
                "Agent heartbeat received"
        );

        return updatedAgent;
    }

    private final NetworkEventService networkEventService;

    private final NetworkEventRepository networkEventRepository;
}