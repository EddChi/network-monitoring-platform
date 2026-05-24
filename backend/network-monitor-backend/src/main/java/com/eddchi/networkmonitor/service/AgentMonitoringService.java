package com.eddchi.networkmonitor.service;

import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.repository.NetworkAgentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AgentMonitoringService {

    private final NetworkAgentRepository repository;

    @Scheduled(fixedRate = 60000)
    public void checkOfflineAgents() {

        List<NetworkAgent> agents = repository.findAll();

        for (NetworkAgent agent : agents) {

            if (agent.getLastSeen() != null &&
                    agent.getLastSeen().isBefore(
                            LocalDateTime.now().minusMinutes(2))) {

                agent.setStatus("OFFLINE");

                repository.save(agent);
            }
        }
    }
}