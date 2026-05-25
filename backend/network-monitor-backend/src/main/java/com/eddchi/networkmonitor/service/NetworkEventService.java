package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.model.NetworkEvent;
import com.eddchi.networkmonitor.repository.NetworkEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NetworkEventService {

    private final NetworkEventRepository networkEventRepository;

    public void recordEvent(NetworkAgent agent, String eventType, String description) {
        NetworkEvent event = NetworkEvent.builder()
                .networkAgent(agent)
                .eventType(eventType)
                .description(description)
                .build();

        networkEventRepository.save(event);
    }

    public List<NetworkEvent> getAllEvents() {
        return networkEventRepository.findAll();
    }

    public List<NetworkEvent> getEventsByAgentId(Long agentId) {
        return networkEventRepository.findByNetworkAgentIdOrderByTimestampDesc(agentId);
    }
}
